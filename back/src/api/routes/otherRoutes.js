const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas de listado de user
router.get('/userOther/list', userController.getUsers);

// Rutas de user especifico
router.get('/userOther/:id', userController.getUser);

// Rutas de filtrado
router.get('/userOther/filter/:filter', userController.filterUsers);

router.post('/userOther', userController.createUser);

module.exports = router;
