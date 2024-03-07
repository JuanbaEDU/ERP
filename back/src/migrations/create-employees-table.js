const { Client } = require('pg');
const con = require('../config/db'); // Importa la conexión a la base de datos

async function createTable() {
    try {
        await con.query(`
      CREATE TABLE employees (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        surname VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        iban VARCHAR(255) NOT NULL,
        id_user INT NOT NULL,
        FOREIGN KEY (id_user) REFERENCES users(id)
      )
    `);
        console.log('Tabla "employees" creada con éxito');
    } catch (error) {
        console.error('Error al crear la tabla "employees":', error);
    }
}

createTable();