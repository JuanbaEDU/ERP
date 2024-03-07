const employeeRepository = require('../../repositories/employeeRepository');
//const reportService = require('../../services/reportService');

const getEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id;
        const employee = await userRepository.getEmployeeById(employeeId);
        if (employee) {
            res.json(employee);
        } else {
            res.status(404).send('Empleado no encontrado');
        }
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener el empleado', error: err });
    }
};

const getEmployees = async (req, res) => {
    const filter = req.query;
    try {
        const employees = await userRepository.getEmployeeList(filter);
        res.json(employees);
    } catch (err) {
        console.error('Error al obtener empleados:', err);
        res.status(500).json({ message: 'Error al obtener empleados' });
    }
};


const createEmployee = async (req, res) => {
    try {
        const newEmployee = req.body;
        const employee = await employeeRepository.createEmployee(newEmployee);
        if (employee) {
            res.status(201).json(employee);
        } else {
            res.status(400).send('Error al crear el empleado');
        }
    } catch (err) {
        console.error('Error al crear el empleado:', err);
        res.status(500).json({ message: 'Error al crear el empleado', error: err });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEmployee = await employeeRepository.deleteEmployee(id);
        if (deletedEmployee) {
            res.status(200).json({ message: 'Empleado eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Empleado no encontrado' });
        }
    } catch (err) {
        console.error('Error al eliminar el empleado:', err);
        res.status(500).json({ message: 'Error al eliminar el empleado', error: err.message });
    }
};

/*const createReport = async (req, res) => {
    try {
        const users = await userRepository.getUserList();
        const doc = await reportService.generateUserReport(users);

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');

        doc.pipe(res);
        doc.end();
    } catch (err) {
        console.error('Error al generar el informe de usuarios:', err);
        res.status(500).json({ message: 'Error al generar el informe de usuarios' });
    }
};*/


module.exports = { getEmployees, getEmployee, createEmployee, deleteEmployee };