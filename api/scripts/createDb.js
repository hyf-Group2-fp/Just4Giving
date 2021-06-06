const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = require('../config.js');


const createDb = async () => {
    const host = DB_HOST;
    const port = 3306;
    const user = DB_USER;
    const password = DB_PASSWORD;

    // create db if it doesn't already exist
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
}

createDb().then(() => {
        process.exit();
});