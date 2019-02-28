var mysql = require('mysql');
var dbConfig = require('./dbConfig');
var userSQL = require('../model/Usersql');

try {
    // load DBConfig.js, create connection pool
    var pool = mysql.createPool( dbConfig.mysql );
    console.log('Connected to the MYSQL database');
} catch(e) {
	console.log('Database Connetion failed:' + e);
}

// 添加用户
dbQuery.get('/addUser', function(req, res, next){
    // 从连接池获取连接 
     pool.getConnection(function(err, connection) { 
       // 获取前台页面传过来的参数  
       var param = req.query || req.params;   
       // 建立连接 增加一个用户信息 
       connection.query(userSQL.insert, [param.uid,param.name], function(err, result) {
         if(result) {      
           result = {   
             code: 200,   
             msg:'insert successfully'
           };  
         }     
         // 以json形式，把操作结果返回给前台页面     
         responseJSON(res, result);   
         // 释放连接  
         connection.release();  
       });
     });
   });
   

  module.exports = dbQuery;