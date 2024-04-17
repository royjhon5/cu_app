const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/verifyToken');
const UserController = require('../controller/AdminController/AuthController');
const { refreshToken } = require('../controller/AdminController/refreshToken');


// GET //
router.get('/users', verifyToken, UserController.getUsers);
router.get('/token', refreshToken);
router.get('/find-user', UserController.getIdnumber);
//POST//
router.post('/admin-register', UserController.adminUserReg);
router.post('/admin-login', UserController.userLogin);
router.post('/send-otp', UserController.sendOtp); 
router.post('/send-message-opt', UserController.sendOtpMessage);

//DELETE//
router.delete('/admin-logout', UserController.userLogout);
module.exports = router;