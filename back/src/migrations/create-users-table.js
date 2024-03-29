const { Client } = require('pg');
const con = require('../config/db'); // Importa la conexi�n a la base de datos

async function createTable() {
  try {
    await con.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL
      )
    `);
    console.log('Tabla "users" creada con exito');
  } catch (error) {
    console.error('Error al crear la tabla "users":', error);
    con.end(); // Cierra la conexi�n
  }
}

createTable();
