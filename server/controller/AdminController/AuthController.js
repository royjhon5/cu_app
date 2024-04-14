const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const adminUser = require('../../models/AdminModel/adminAuthModel');
const db = require('../../config/dbConnection')

module.exports.getUsers = async function(req, res) {
  try {
    const users = await adminUser.findAll({
      attributes:['id','id_number','first_name']
    });
    res.json(users);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}

module.exports.adminUserReg = async function(req, res) {
  const { id_number, password, first_name } = req.body;
  try {
    adminUser.findByIdNumber(id_number, async(err, existingUser) => { 
      if(err){
        console.error(err);
        return res.status(500).json({ message: 'Server Error'});
      }
      if (existingUser) {
        return res.status(400).json({ message: 'User already exist'});
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = {
        id_number, 
        first_name,
        password: hashedPassword
      }
      adminUser.register(newUser, (err, userId) => {
        if(err){
          console.error(err);
          return res.status(500).json({ message: 'Server Error' });
        }
        const payLoad = {
          user: { 
            id: userId
          }
        };
        jwt.sign(payLoad, process.env.SECRET_KEY, { expiresIn: '1h'}, (err, token) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Server Error'});
          }
          res.cookie('token', token, { httpOnly: true }).json({ token });;
        })
      })
    })
  } catch(err){
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}

module.exports.userLogin = async function(req, res) {
  const { id_number, password } = req.body;
  try {
      const user = await adminUser.findIdNumberLogin(id_number);
      if (user.is_disable === 1) {
        return res.status(400).json({ error: 'Account locked. Please contact support.' });
      } else {
        if(!user) return res.status(400).json({ error: 'Invalid Id Number' });
        if (user.refresh_token) {
          return res.status(400).json({ error: 'User is already logged in on another device.' });
        }
        const match = await bcrypt.compare(password , user.password);
        if (!match) {
          if (user.failed_login_attempts >= 5) {
            await adminUser.isDisable(user.id)
            return res.status(400).json({ error: 'Account locked. Please contact support.' });
          } else {
            await adminUser.incrementFailedAttempts(user.id);
          }
          return res.status(400).json({ error: 'Invalid password!' });
        }
        const userID = user.id;
        const fName = user.first_name;

        const accessToken = jwt.sign({userID, fName}, process.env.SECRET_KEY, {
          expiresIn: '15s'
        });
        const refreshToken = jwt.sign({userID, fName}, process.env.REFRESH_KEY, {
          expiresIn: '1d'
        });
     
        await db.query('UPDATE admin_user SET refresh_token = ? WHERE id = ?;', [
          refreshToken, user.id
        ]);
        await db.query('UPDATE admin_user SET last_login = now() WHERE id =?;', [
            user.id,
        ]);
        res.cookie('refreshToken', refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
      }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
}

module.exports.userLogout = async function(req, res) {
  const refreshToken = req.cookies.refreshToken;
  if(!refreshToken) return res.sendStatus(204);
  const user = await adminUser.findAll({refresh_token: refreshToken});
  if(!user) return res.sendStatus(204);
    await db.query('UPDATE admin_user SET refresh_token = ?, last_login = now() WHERE id = ?', [
      '', user.id
    ]);
  res.clearCookie('refreshToken');
  return res.sendStatus(200);
}