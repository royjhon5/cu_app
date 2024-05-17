const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/verifyToken');
const UserController = require('../controller/AdminController/AuthController');
const { refreshToken } = require('../controller/AdminController/refreshToken');
const multer = require('multer');
const upload = multer({ storage: UserController.storage });
// GET //
router.get('/find-user', UserController.getIdnumber);
router.get('/update-password', UserController.UpdatePassword);
router.get('/user-profile', UserController.getUserProfile);
//POST//
router.post('/admin-register', UserController.adminUserReg);
router.post('/admin-login', UserController.userLogin);
router.post('/upload-profile', upload.single('image'), UserController.UploadProfilePicture);
router.post('/upload-cover', upload.single('image'), UserController.UploadCoverPicture);


//DELETE//
router.delete('/admin-logout', UserController.userLogout);
module.exports = router;