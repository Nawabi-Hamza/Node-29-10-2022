console.log("Testing...")
// // for install or use database install this or type in Terminal (npm install mysql)
// // multi user add in data base
// var mysql = require('mysql')
// var con = mysql.createConnection({
//         host:'localhost',
//         user:'root',
//         pass:'',
//         database: 'dbNode'
//         })
//     con.connect((err)=>{  
//         if(err) throw err;
//         var sql = 'INSERT INTO customers(name,address,email) VALUES ?'
//         var values = [
//             ['Noori','khair khana','wadan@gmail.com'],
//             ['Hamza','khair khana kabul','Hamza12@gmail.com'],
//             ['Azizi','khair khana kabul','Azizi@gmail.com'],
//             ['Hamza','khair khana kabul','Hamza12@gmail.com']
//         ]
//         con.query(sql,[values],(err,res)=>{
//         if(err) throw err;
//         console.log("user added "+ res.insertId)
//         })
//     })

// multi user add in data base
// var mySql = require('mysql')
// // var con = mysql.createConnection({
// //         host:'localhost',
// //         user:'root',
// //         pass:'',
// //         database: 'dbNode'
// //         })
//     con.connect((err)=>{  
//         if(err) throw err;
//         // add user in database
//         // var sql = "INSERT INTO customers(name,address,email) VALUES ('Hamza','khair khana kabul','Hamza11@gmail.com')"
//         // con.query(delsql,(err)=>{
//         //     if(err) throw err;
//         //     console.log("user Deleted ")
//         //     })
//         // Delete user from database
//         // var delsql = "DELETE FROM `customers` WHERE `customers`.`id` = 25"
//         // con.query(delsql,(err)=>{
//         // if(err) throw err;
//         // console.log("user Deleted ")
//         // })
//         console.log("mySql conected succssfuly")
//         var sql = 'SELECT * FROM customers'
//         con.query(sql,(err,res)=>{
//             if(err) throw err;
//             console.log(res)
//         })
//     })
var mysql = require('mysql')
var con = require('./DBConnection')
    con.connect((err)=>{  
        if(err) throw err;
        console.log("mySql conected succssfuly")
            // list all data from database}
        // var sql = "SELECT * FROM customers"
            // list all email from database}
        // var sql = "SELECT email FROM customers"
            // list all name and email from database}
        // var sql = "SELECT name,email FROM customers"
            // show all name which started with H
        // var sql = "SELECT * FROM `customers` WHERE name LIKE 'H%'"
            // show all name which Ended with i
            // show all name which started with H
        // var name = 'Azizi'
        // var name1 = 'Hamza'
        // var add = 'khair khana kabul'
        // var sql = "SELECT * FROM `customers` WHERE name ='"+name+"'"
        // var sql = "SELECT * FROM `customers` WHERE name ="+ mysql.escape(name)
        // var sql = "SELECT * FROM `customers` WHERE `name` LIKE "+mysql.escape(name)+ "AND `address` LIKE "+mysql.escape(add)
        // var sql = "SELECT * FROM `customers` WHERE `name` = "+mysql.escape(name)+ "OR `name` = "+mysql.escape(name1)
        // var sql = "SELECT * FROM `customers` ORDER BY Id DESC"
        // var sql = "SELECT * FROM `customers` ORDER BY name DESC"
        // var sql = "UPDATE `customers` SET `address` = 'Kabul'  WHERE `customers`.`id` = 21"
        // var sql = "UPDATE customers SET name = 'Ali'  WHERE name = 'Noori'"
        // var sql = "UPDATE customers SET address = 'Mazar'  WHERE address = 'khair khana'"
        // var sql = "DELETE FROM customers WHERE name = 'Ali'"
        // var sql = "DELETE FROM customers WHERE id = '18'"
        // var sql = "INSERT INTO `customers` (`name`, `address`, `email`) VALUES ( 'Hamza1', 'mazar', 'hamza@gmail.com');"
        // var sql = "INSERT INTO `customers` (`name`, `address`, `email`) VALUES ( 'Shafi', 'Zabul', 'hamza@gmail.com');"
        // var sql = "SELECT * FROM customers LIMIT 2"
        // var sql = "CREATE TABLE products (name VARCHAR(20))"
        // var sql = "DROP TABLE products"
        // var sql = "CREATE TABLE products (id INT AUTO_INCREAMENT PRIMARY KEY,name VARCHAR(10), price VARCHAR(10) , stuck VARCHAR(10))"
        // var sql = "INSERT INTO `products` (`name`, `pirce`, `stock`) VALUES ?"
        // var values = [
        //     ['tv','3000','20'],
        //     ['pen','30','50'],
        //     ['desk','120','20'],
        //     ['remote','100','40'],
        //     ['mobile','1200','35'],
        // ]
        // con.query(sql,[values],(err,res)=>{
        //     if(err) throw err;
        //     console.log(res)
        // })
        // var sql = "CREATE TABLE orders (id INT AUTO_INCREMENT PRIMARY KEY ,order_number INT , customer_id INT FOREIGN KEY (customers) REFERNCE customers(id), product_id INT , FOREIGN KEY (product_id) REFERNCE products(id))"
        var sql = "CREATE TABLE orders (id INT AUTO_INCREAMENT PRIMARY KEY ,order_number INT , customers_id INT , products_id INT , FOREIGN KEY (customers_id) REFERNCES customers(id) , FOREIGN KEY (products_id) REFERNCES products(id))"
        con.query(sql,(err,res)=>{
            if(err) throw err;
            console.log(res)
        })
    })