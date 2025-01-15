const mysql = require('mysql');

module.exports = function(){
    return connection = mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        password : '123456789',
        database : 'portal_noticias'
    });
}