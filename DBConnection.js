var mysql = require('mysql')
var con = mysql.createConnection({
        host:'localhost',
        user:'root',
        pass:'',
        database: 'dbNode'
        })

module.exports = con;