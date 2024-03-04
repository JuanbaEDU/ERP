const db = require('../config/db');

const getUserList = async (filters) => {
    let query = 'SELECT * FROM users';

    const conditions = [];
    const values = [];
    
    if(filters){   
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