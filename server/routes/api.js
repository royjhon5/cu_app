const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate')
const { verifyToken } = require('../middleware/verifyToken');
const UserController = require('../controller/AdminController/AuthController');
const { refreshToken } = require('../controller/AdminController/refreshToken');


router.get('/users', verifyToken, UserController.getUsers);
router.post('/admin-register', UserController.adminUserReg);
router.post('/admin-login', UserController.userLogin);
router.get('/token', refreshToken);
router.delete('/admin-logout', UserController.userLogout);

router.get('/protected', authenticate, (req, res) => {
    res.status(200).json({ message: 'Access granted' });
});
module.exports = router;