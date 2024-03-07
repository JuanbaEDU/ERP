const { Client } = require('pg');
const con = require('../config/db'); // Importa la conexión a la base de datos

async function createTable() {
  try {
    await con.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL
      )
    `);
    console.log('Tabla "users" creada con éxito');
  } catch (error) {
    console.error('Error al crear la tabla "users":', error);
  }
}

createTable();
