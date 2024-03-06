const { Client } = require('pg');
const con = require('../config/db'); // Importa la conexión a la base de datos

async function seedDatabase() {
  try {
    // Inserta datos de prueba en la tabla "users"
    await con.query(`
      INSERT INTO users (email)
      VALUES
        ('user6@example.com'),
        ('user7@example.com'),
        ('user8@example.com'),
        ('user9@example.com'),
        ('user10@example.com')
    `);
    console.log('Base de datos poblada con éxito');

  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
  } finally {
    con.end(); // Cierra la conexión
  }
}

seedDatabase();
