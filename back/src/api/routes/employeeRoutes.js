const express = require('express')
const router = express.Router();
const employeeControler = require('../controllers/employeeControler');

router.get('/employees', employeeControler.getEmployees);
router.get('/employees/:id', employeeControler.getEmployee);
router.post('/employee', employeeControler.createEmployee);
router.delete('empoyee/:id', employeeControler.deleteEmployee)

module.exports = router;