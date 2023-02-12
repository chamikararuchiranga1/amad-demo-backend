const mysql = require('mysql2')

let connection;

function getConnection() {
    if (!connection) {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'acpt',
            database: 'demo_amad'
        })
    }
    return connection;
}

module.exports=getConnection();