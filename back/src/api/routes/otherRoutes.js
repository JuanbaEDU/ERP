const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/userOther/list', userController.getUsers);
router.get('/userOther/:id', userController.getUser);
router.post('/userOther', userController.createUser);

module.exports = router;
