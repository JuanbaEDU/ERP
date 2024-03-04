const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas de listado de user
router.get('/user/list', userController.getUsers);

// Rutas de user especifico
router.get('/user/:id', userController.getUser);

// Rutas de filtrado
router.get('/user/filter/:filter', userController.filterUsers);

router.post('/user', userController.createUser);

module.exports = router;
