const mysql = require('mysql');

const configuration = {
    debug: true,
    port: 3306,
    mysql: {
        host: '127.0.0.1',
        username: 'root',
        password: '',
        database: 'prulife_recruitment'
    }
}

const connection = mysql.createConnection({
    host: configuration.mysql.host,
    port: configuration.port,
    user: configuration.mysql.username,
    passowrd: configuration.mysql.password,
    database: configuration.mysql.database,
    insecureAuth: false
});


module.exports = connection;