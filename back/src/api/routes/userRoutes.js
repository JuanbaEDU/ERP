const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getUsers);
router.get('/users/report', userController.createReport);
router.get('/users/:id', userController.getUser);
router.post('/users', userController.createUser);

module.exports = router;
