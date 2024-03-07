const db = require('../config/db');

const getEmployeeList = async (filters) => {
    let query = 'SELECT * FROM employees';

    const conditions = [];
    const values = [];

    if (filters) {
        if (filters.email) {
            conditions.push('email LIKE $1');
            values.push(`%${filters.email}%`);
        }

        if (filters.name) {
            conditions.push('name LIKE $2');
            values.push(`%${filters.name}%`);
        }

        if (conditions.length > 0) {
            query += ' WHERE ' + conditions.join(' AND ');
        }
    }
    return (await db.query(query, values)).rows;
};


const getEmployeeById = async (id) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Employees WHERE Id = ?", [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const getEmployeeFilter = async (filter) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Employee WHERE Name LIKE '%" + filter + "%'", (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const createEmployee = async (user) => {
    return new Promise((resolve, reject) => {
        const email = user.email;
        db.query("INSERT INTO Employee (Email) VALUES ($1) RETURNING *", [email], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results.rows[0]); // Devuelve el primer empleado (y único) creado
            }
        });
    });
};

module.exports = {
    getEmployeeList,
    getEmployeeById,
    getEmployeeFilter,
    createEmployee
};