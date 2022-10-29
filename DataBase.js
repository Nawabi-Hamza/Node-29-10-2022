console.log("Testing...")
var http = require('http')
var mysql = require('mysql')
var con = mysql.createConnection({
        host:'localhost',
        user:'root',
        pass:'',
        database: 'onlineshoping'
        })
    con.connect((err)=>{
        //  var sql = "CREATE TABLE customers (ID INT AUTO_INCREMENT PRIMARY KEY ,name VARCHAR (20), address VARCHAR (30)  )"
        //  var sql = "CREATE TABLE products (ID INT AUTO_INCREMENT PRIMARY KEY ,name VARCHAR (20) , pirce VARCHAR (30) , stock VARCHAR (10) )"
        // var sql = "INSERT INTO customers (name,address) VALUES ?"
        // var data = [
        //     ['Aziz','Kabul'],
        //     ['Shafi','Mazar'],
        //     ['Gholam','Herat'],
        //     ['Ahmad','Baghlan'],
        //     ['Noor','Zabul'],
        //     ['Hamza','Panjsher'],
        //     ['Sardar','Nooristan'],
        // ]
        // var sql = "INSERT INTO products (name,pirce,stock) VALUES ?"
        // var data = [
        //     ['Tv','12000Afg','12'],
        //     ['PC','8000Afg','15'],
        //     ['Pen','12Afg','100'],
        //     ['Mobile','9200Afg','21'],
        //     ['Dish','1100Afg','32']
        // ]
        // con.query(sql,[data],(err,res)=>{
        //     console.log("DataBase Connected..")
        //     console.log(res)
        // })
        var sql = "SELECT * FROM customers "
        con.query(sql,(err,res)=>{
            console.log("Your Connected ...")
            console.log(res)
            http.createServer((req,response)=>{
                response.writeHead(200,{'content-type':'Application/jsopn'})
                response.end(JSON.stringify(res))
            }).listen(369,()=>{console.log("DataBase is in Screen")})
        })
    })
