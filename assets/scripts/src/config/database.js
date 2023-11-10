const mysql2 = require('mysql2');

//Datos de la base de datos
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'Alibaba10*';
const DB_NAME = process.env.DB_NAME || 'aliwoodbd';
const DB_PORT = process.env.DB_PORT || '3306';

//Funcion para crear la conexion
const database = mysql2.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME,
});

module.exports = database;