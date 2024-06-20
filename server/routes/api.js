const express = require('express');
const router = express.Router();
const UserController = require('../controller/AdminController/AuthController');
const AdminController = require('../controller/AdminController/AdminController');
const ClientUserController = require('../controller/ClientController/ClientAuthController');
const ChatController = require('../controller/ClientController/GuestChatController');
const multer = require('multer');
const upload = multer({ storage: UserController.storage });
const fileUpload = require('express-fileupload');
const db = require('../config/dbConnection');
const XLSX = require('xlsx');
const fs = require('fs');

const uploadOptions = {
  useTempFiles: true,
  tempFileDir: '/tmp/'
}

// ADMIN USER API HERE

// GET //
router.get('/find-user', UserController.getIdnumber);
router.get('/update-password', UserController.UpdatePassword);
router.get('/user-profile', UserController.getUserProfile);
router.get('/newreg-notify', UserController.newClientRegistrationNotification);
router.get('/unread-notify', UserController.unreadNotification);
router.get('/get-roles', AdminController.getRoles)
router.get('/client-user-list', AdminController.AllClientListData)
router.get('/get-guest-users', AdminController.ReplyGuestChat)
//POST//
router.post('/admin-register', UserController.adminUserReg);
router.post('/admin-login', UserController.userLogin);
router.post('/upload-profile', upload.single('image'), UserController.UploadProfilePicture);
router.post('/upload-cover', upload.single('image'), UserController.UploadCoverPicture);
router.post('/is-open-notification', UserController.isOpenNotification);
router.post('/read-notification', UserController.readNotification);
router.post('/activate-client', UserController.acceptNewClient);
router.post('/upload-roles', AdminController.saveNewRole);
router.post('/update-roles', AdminController.updateRole);
router.post('/unread-guest-messages', AdminController.ReadMessage);

//DELETE//
router.delete('/admin-logout', UserController.userLogout);
router.delete('/delete-roles', AdminController.deleteRole);
// ENDS HERE


// CLIENT API HERE
// GET //
router.post('/client-register', ClientUserController.clientRegistration);
router.get('/verify-email', ClientUserController.verifyEmail);
router.get('/unread-admin-messages', ChatController.ReplyAdminChat);

//POST//
router.post('/client-login', ClientUserController.ClientuserLogin);
router.post('/set-password', ClientUserController.setPassword);
router.post('/read-admin-messages', ChatController.ReadAdminMessage);

// router.post('/import-excel', fileUpload({ useTempFiles: true }), async (req, res) => {
//   try {
//     const { excel } = req.files;

//     if (!excel) {
//       return res.status(400).json({ msg: 'No file uploaded' });
//     }

//     if (excel.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
//       fs.unlinkSync(excel.tempFilePath);
//       return res.status(400).json({ msg: 'File is invalid' });
//     }

//     const workbook = XLSX.readFile(excel.tempFilePath);
//     const sheetName = workbook.SheetNames[0];
//     const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { raw: true });

//     const successData = [];
//     const failureData = [];

//     for (const row of data) {
//       let { Amortization = '' } = row;

//       // Ensure Amortization is a number and handle empty or invalid values
//       Amortization = parseFloat(Amortization);
//       if (isNaN(Amortization)) {
//         Amortization = 0; // or any default value you prefer
//       }

//       const sql = 'UPDATE tblloanhdr SET Amortization = ? WHERE LHDRID > 0';

//       try {
//         // Adjusted the destructuring to handle the result properly
//         const result = await db.query(sql, [Amortization]);

//         if (result && result[0] && result[0].affectedRows > 0) {
//           successData.push(row);
//         } else {
//           failureData.push(row);
//         }
//       } catch (err) {
//         failureData.push(row);
//         console.error(`Failed to update row: ${JSON.stringify(row)}`, err);
//       }
//     }

//     fs.unlinkSync(excel.tempFilePath);

//     return res.status(200).json({
//       msg: 'File processed',
//       success: successData.length,
//       failure: failureData.length,
//       successData,
//       failureData
//     });
//   } catch (error) {
//     console.error(error);
//     if (req.files && req.files.excel) {
//       fs.unlinkSync(req.files.excel.tempFilePath);
//     }
//     return res.status(500).json({ msg: 'Internal server error' });
//   }
// });

// router.post('/import-excel', fileUpload(uploadOptions), async (req, res) => {
//   try {
//     const { excel } = req.files;

//     if (excel.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
//       fs.unlinkSync(excel.tempFilePath);
//       return res.status(400).json({ msg: 'File is invalid' });
//     }
    
//     const workbook = XLSX.read(excel.tempFilePath, { type: 'file' });
//     const sheetName = workbook.SheetNames[0];
//     const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  
//     const successData = [];
//     const failureData = [];
  
//     for (let i = 0; i < data.length; i++) {
//       const {
//         CustID = '',
//         LName = '',
//         FName = '',
//         MName = '',
//         Address = '',
//         Gender = '',
//         BrgyAddress = '',
//         CityAddress = '',
//         ProvinceAddress = '',
//         ZipCode = '',
//         GroupName = '',
//       } = data[i];
      
//       const sql = 'INSERT INTO tblcustomer(CustID,LName,FName,MName,Address,Gender,BrgyAddress,CityAddress,ProvinceAddress,ZipCode,GroupName) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      
//       try {
//         const [rows] = await db.query(sql, [
//           CustID || '', LName || '', FName || '', MName || '', Address || '', Gender || '', BrgyAddress || '', CityAddress || '',
//           ProvinceAddress || '', ZipCode || '', GroupName || ''
//         ]);
        
//         if (rows.affectedRows) {
//           successData.push(data[i]);
//         } else {
//           failureData.push(data[i]);
//         }
//       } catch (err) {
//         failureData.push(data[i]);
//         console.error(`Failed to insert row: ${JSON.stringify(data[i])}`, err);
//       }
//     }
    
//     fs.unlinkSync(excel.tempFilePath);
//     return res.status(200).json({
//       msg: 'File processed',
//       success: successData.length,
//       failure: failureData.length,
//       successData,
//       failureData
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ msg: 'Internal server error' });
//   }
// });

router.post('/import-excel', fileUpload(uploadOptions), async (req, res) => {
  try {
    const { excel } = req.files;

    if (excel.mimetype !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      fs.unlinkSync(excel.tempFilePath);
      return res.status(400).json({ msg: 'File is invalid' });
    }

    const workbook = XLSX.readFile(excel.tempFilePath);
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const successData = [];
    const failureData = [];

    const excelDateToJSDate = (serial) => {
      const excelEpoch = new Date(Date.UTC(1899, 11, 30));
      const jsDate = new Date(excelEpoch.getTime() + serial * 86400000);
      return jsDate;
    };

    const formatDate = (date) => {
      if (!date) return null;
      const parsedDate = (typeof date === 'number') ? excelDateToJSDate(date) : new Date(date);
      if (isNaN(parsedDate)) return null; // Ensure date is valid
      const year = parsedDate.getFullYear();
      const month = (`0${parsedDate.getMonth() + 1}`).slice(-2);
      const day = (`0${parsedDate.getDate()}`).slice(-2);
      return `${year}-${month}-${day}`;
    };

    for (let i = 0; i < data.length; i++) {
      const {
        LHDRID = '',
        LName = '',
        FName = '',
        MName = '',
        StAddress = '',
        Brgy = '',
        City = '',
        Province = '',
        Zip = '',
        ApprovedDate = '',
        ReleaseDate = '',
        MaturityDate = '',
        Terms = '',
        Amort_Principal = '',
        Amort_Interest = '',
        Remarks = '',
        AppDate = '',
        LTypeName = '',
        CollectionType = '',
      } = data[i];

      const formattedApprovedDate = formatDate(ApprovedDate);
      const formattedReleaseDate = formatDate(ReleaseDate);
      const formattedMaturityDate = formatDate(MaturityDate);
      const formattedAppDate = formatDate(AppDate);

      const sql = 'INSERT INTO tblloanhdr(LHDRID, LName, FName, MName, StAddress, Brgy, City, Province, Zip, ApprovedDate, ReleaseDate, MaturityDate, Terms, Amort_Principal, Amort_Interest, Remarks, AppDate, LTypeName, CollectionType) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

      try {
        const [rows] = await db.query(sql, [
          LHDRID || '', LName || '', FName || '', MName || '', StAddress || '', Brgy || '', City || '', Province || '',
          Zip || '', formattedApprovedDate, formattedReleaseDate, formattedMaturityDate, Terms || '',
          Amort_Principal || '', Amort_Interest || '', Remarks || '', formattedAppDate, LTypeName || '', CollectionType || '',
        ]);

        if (rows.affectedRows) {
          successData.push(data[i]);
        } else {
          failureData.push(data[i]);
        }
      } catch (err) {
        failureData.push(data[i]);
        console.error(`Failed to insert row: ${JSON.stringify(data[i])}`, err);
      }
    }

    fs.unlinkSync(excel.tempFilePath);
    return res.status(200).json({
      msg: 'File processed',
      success: successData.length,
      failure: failureData.length,
      successData,
      failureData
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: 'Internal server error' });
  }
});
  
module.exports = router;







