const express = require('express');
const router = express.Router();

const controller = require('../controller/UserController');
router.get('/new-recruit', controller.getReqcruits);

module.exports = router;