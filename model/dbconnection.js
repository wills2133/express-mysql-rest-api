var mysql = require('mysql');
var dbConfig = require('./dbConfig');
var userSQL = require('../model/Usersql');
var dbGet = require('../model/dbGet');

try {
    // load DBConfig.js, create connection pool
    var pool = mysql.createPool( dbConfig.mysql );
    console.log('Connected to the MYSQL database');
} catch(e) {
	console.log('Database Connetion failed:' + e);
}

exports.get = function (req, res) {
    // 从连接池获取连接 
    pool.getConnection(function(err, connection) { 
        // 建立连接 增加一个用户信息 
        dbGet.findByColumn(connection, req, res) 
        // 以json形式，把操作结果返回给前台页面     
        // responseJSON(res, result);   
        // 释放连接  
        connection.release();  
    });
}
   