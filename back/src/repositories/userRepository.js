const db = require('../config/db');


const getUserList = async () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Users", (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results.rows);
            }
        });
    });
};

const getUserById = async (id) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Users WHERE Id = ?", [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const getUserFilter = async (filter) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM Users WHERE Name LIKE '%" + filter + "%'", (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const createUser = async (user) => {
    return new Promise((resolve, reject) => {
        const email = user.email;
        db.query("INSERT INTO Users (Email) VALUES ($1) RETURNING *", [email], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results.rows[0]); // Devuelve el primer usuario (y único) creado
            }
        });
    });
};

module.exports = {
    getUserList,
    getUserById,
    getUserFilter,
    createUser
};