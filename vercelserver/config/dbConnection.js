const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
    host: 'http://103.62.153.118/',
    port: '3306',
    user: 'vienna',
    passowrd: '',
    database: 'dbgshop',
    insecureAuth: false
});

connection.connect((err) => {
    if(err) {
        console.error('Error connecting to database', err)
        return;
    }
    console.log('Connected to the database');
});


module.exports = connection;