const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register & Login
router.post('/register', userController.register);
router.post('/login', userController.login);

// Get all users (optional, for admin)
router.get('/', userController.getUsers);

module.exports = router;
