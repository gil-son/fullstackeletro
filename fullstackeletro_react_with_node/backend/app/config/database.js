// Modules here
var mysql = require('mysql');

module.exports = function(){ 
    return mysql.createConnection({
        host:'localhost',
        user:'',
        password:'',
        database:'fullstackeletro'
    });
}