const mysql = require('mysql2');
const pool = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'college',
    password:'Abd26!2003',
    port:'3306'
})
module.exports = pool.promise();