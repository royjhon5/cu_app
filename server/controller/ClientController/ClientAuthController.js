const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const clientUser = require('../../models/ClientModel/clientAuthModel');
const db = require('../../config/dbConnection');
const jwt = require('jsonwebtoken');



module.exports.ClientuserLogin = async function(req, res) {
  const { id_number, password } = req.body;
  try {
      const user = await clientUser.findIdNumberLogin(id_number);
      if (!user) return res.status(400).json({ error: 'Invalid Id Number' });
      if (user.status === 'pending') return res.status(400).json({ error: 'Your account is currently pending for approval. Please contact the administrator to update your account status.' });
      if (user.status === 'rejected') return res.status(400).json({ error: 'Your account has been rejected. Please contact the administrator for further assistance.' });
      if (user.status === 'banned') return res.status(400).json({ error: 'Your account has been banned. Please contact the administrator to resolve this issue.' });
      if (user.access_token) return res.status(400).json({ error: 'User is already logged in on another device.' });
      if (user.is_disable === 1) return res.status(400).json({ error: 'Account locked. Please contact the administrator for further assistance.' });
      const match = await bcrypt.compare(password , user.password);
        if (!match) {
          if (user.failed_login_attempts >= 5) {
            await clientUser.isDisable(user.id)
            return res.status(400).json({ error: 'Account locked. Please contact support.' });
          } else {
            await clientUser.incrementFailedAttempts(user.id);
          }
          return res.status(400).json({ error: 'Invalid password!' });
        }
      const userID = user.id;
      const fName = user.first_name;
      const idNumber = user.id_number;
      await clientUser.resetFailedAttempts(user.id);
      const clientaccessToken = jwt.sign({userID, fName, idNumber}, process.env.SECRET_KEY, {
        expiresIn: '1d'
      }); 
      await db.query('UPDATE client_user SET access_token = ? WHERE id = ?;', [
        clientaccessToken, user.id
      ]);
      await db.query('UPDATE client_user SET last_login = now() WHERE id =?;', [
          user.id,
      ]);
      res.cookie('clientaccessToken', clientaccessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
      });
      res.json({ clientaccessToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
}

module.exports.clientRegistration = async function(req, res) {
    const { id_number, first_name, last_name, email, contact_no, type_id } = req.body;
    try {  
    const user = await clientUser.findIdNumberRegister(id_number);
    const userEmail = await clientUser.findUserEmail(email);
    if (user) return res.status(400).json({ error: 'ID Number already exist!' });
    if (userEmail) return res.status(400).json({ error: 'Email address already exist!' });
    const token = jwt.sign({ id_number, email }, process.env.REFRESH_KEY, { expiresIn: '1d' });
    const newUser = {
      id_number, 
      first_name,
      last_name,
      email,
      contact_no,
      type_id,
      verification_token: token,
      is_verified: false,
    }
    await db.query('INSERT INTO client_user SET ?', [newUser])
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      host: 'smpt.gmail.com',
      port: 587,
      auth: {
        user: process.env.EMAIL_NODE,
        pass: process.env.EMAIL_PASS_NODE,
      }
    });
    const mailOptions = {
      from: 'cugiftshop7@gmail.com',
      to: email,
      subject: 'Capitol University Giftshop',
      html: `<!DOCTYPE html>
          <html>
          <head>
              <style>
                  .container {
                      background-color: #E5E5E5;
                      padding: 20px;
                      width: 35%;
                      margin: 0 auto;
                      text-align: center;
                  }
                  .button {
                    display: inline-block;
                    padding: 10px 20px;
                    font-size: 16px;
                    font-weight: bold;
                    color: white;
                    background-color: #9F1E22;
                    border-radius: 5px;
                    text-decoration: none;
                  }
              </style>
          </head>
          <body>
              <div class="container">
                  <img src="https://www.cu.edu.ph/wp-content/uploads/2021/06/CU-Logo-web.png" style="width: 100%; height: 100%; background-color: #9F1E22; border-radius: 10px;">
                  <h1>Account Verification:</h1>
                  <p style="font-weight: bold; font-size: 24px;">Hi ${first_name}</p>
                  <p style="font-weight: bold; font-size: 16px;">Please confirm your email by clicking the link below:</p>
                  <div style="padding: 10px; background-color:#F9F9F9;">
                      <a href="http://localhost:3100/verify-email?token=${token}" class="button">Confirm Email</a>
                  </div>
                  <p>If this request did not come from you, change your account password immediately to prevent further unauthorized access.</p>
              </div>
          </body>
          </html>
      `
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Registration successful! Please check your email to confirm your email address.' });
    } catch (error) {
        console.error(error)
        res.status(500).send('Server Error');
    }
}

module.exports.verifyEmail = async function(req, res) {
  const { token } = req.query;
  if (!token) {
    return res.status(400).send('Invalid verification link.');
  }
  try {
      const decoded = jwt.verify(token, process.env.REFRESH_KEY);
      const { id_number } = decoded;
      const user = await db.query('SELECT * FROM client_user WHERE verification_token = ?', [token]); 
      if (!user) {
        return res.status(400).send('Invalid verification token.');
      }
      db.query('UPDATE client_user SET is_verified = ?, verification_token = NULL WHERE id_number = ?', [true, id_number]);  
      res.status(200).send(id_number);
  } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
  }
};

module.exports.setPassword = async function(req, res) {
    const { id_number, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.query('UPDATE client_user SET password = ? WHERE id_number = ?', [hashedPassword, id_number]);

        const PushNotification = {
          user_id_number: id_number,
          type_of_notification: 'New User Registration',
          is_open: false,
          notif_status: false,
        }
        await db.query('INSERT INTO notifications SET ?', [PushNotification]);
        res.status(200).json({ message: 'Password set successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};