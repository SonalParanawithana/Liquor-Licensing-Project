const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/authCtrl');

router.post('/licensee', register);
// router.post('/login', login);


module.exports = router;