var mysql = require('mysql');
var dbConfig = require('./dbConfig');
var dbGet = require('../model/dbGet');

try {
    // load DBConfig.js, create connection pool
    var pool = mysql.createPool( dbConfig.mysql );
    console.log('Connected to the MYSQL database');
} catch(e) {
	console.log('Database Connetion failed:' + e);
}

exports.get = function (req, res) {
    // get connection from pool 
    pool.getConnection(function(err, connection) { 
        dbGet.findByColumn(connection, req, res)   
        connection.release();  
    });
}
   