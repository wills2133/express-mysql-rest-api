var mysql = require('mysql');
var dbConfig = require('./dbConfig');
var dbGet = require('../model/dbGET');
var dbPost = require('../model/dbPOST');
var dbPut = require('../model/dbPUT');
var dbDelete = require('../model/dbDELETE');
try {
    // load dbConfig.js, create connection pool
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

exports.post = function (req, res) {
    // get connection from pool 
    pool.getConnection(function(err, connection) { 
        dbPost.addOne(connection, req, res)   
        connection.release();  
    });
}

exports.put = function (req, res) {
    // get connection from pool 
    pool.getConnection(function(err, connection) { 
        dbPut.update(connection, req, res)   
        connection.release();  
    });
}

exports.delete = function (req, res) {
    // get connection from pool 
    pool.getConnection(function(err, connection) { 
        dbDelete.delete(connection, req, res)   
        connection.release();  
    });
}