// create-database.js

const { Client } = require('pg');
require('dotenv').config();

const con = new Client({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: 'postgres', // Use the default 'postgres' database for creating a new database
});

con.connect(async (err) => {
  if (err) throw err;

  try {
    // Drop the existing database 'erp' if it exists
    await con.query('DROP DATABASE IF EXISTS erp');
    console.log('Database "erp" dropped (if it existed)');
  } catch (error) {
    console.error('Error dropping database:', error);
  }

  // Create a new database 'erp'
  try {
    await con.query('CREATE DATABASE erp');
    console.log('Database "erp" created');

    // Llama al archivo create-users-table.js
    await require('./create-users-table'); // Asegúrate de que la ruta sea correcta
  } catch (error) {
    console.error('Error creating database:', error);
  }

  // Close the connection
  con.end();
});
