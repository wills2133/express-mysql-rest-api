"use strict"
const mysql = require('mysql')
const dbConfig = require('./dbConfig')
const dbGet = require('../model/user/dbGET')
const dbPost = require('../model/user/dbPOST')
const dbPut = require('../model/user/dbPUT')
const dbDelete = require('../model/user/dbDELETE')
const tbSchemas = require('./user/tbSchemas')
const validation = require('./user/validation')

// build connection
const pool0 = mysql.createPool( dbConfig.mysql0 )
try {
    // make a test query to ensure coneection
    pool0.query('SELECT version()', [],
    function(err, result) { 
        if (!err){
            console.log('Connected to the mysql0, database: '+ dbConfig.mysql0.database)
        } else {
            console.log('Failed to cennect mysql0: ' + err)
        }
    })
} catch(e) {
	console.log('Failed to cennect mysql0: ' + e)
}

const pool1 = mysql.createPool( dbConfig.mysql1 )
try {
    // make a test query to ensure coneection
    pool1.query('SELECT version()', [],
    function(err, result) { 
        if (!err){
            console.log('Connected to the mysql1, database: '+ dbConfig.mysql1.database)
        } else {
            console.log('Failed to cennect mysql1: ' + err)
        }
    })
    console.log('Connected to the mysql1, database: '+ dbConfig.mysql1.database)
} catch(e) {
	console.log('Failed to cennect mysql1: ' + e)
}

// // choose connection
// const pool = pool0

// create tables
Object.keys(tbSchemas).forEach((tableName, i) => {
    pool0.query(tbSchemas[tableName], [],
        function(err, result) { 
            if (!err){
                console.log('Table created ' + tableName)
            } else {
                console.log('Create table failed ' + tableName + ': ' + err)
            }
        }
    )
})

exports.ReadWriteQuery = function ( query, req, res ) {
	var columns = req.query
    var table = req.params.table
    const validResult = validation.validate(table, columns)
    if( validResult[0] ){
        // get connection from pool 
        pool0.getConnection(function(err, connection) { 
            if (!err){
                query(connection, req, res)   
                connection.release()
            } else {
                res.status(400).send('Pool connection failed: ' + err)
            }
        })
    }else{
        res.status(400).send(validResult[1] + ": " + validResult[2])
    }
}

exports.ReadOnlyQuery = function ( query, req, res ) {
	var columns = req.query
    var table = req.params.table
    const validResult = validation.validate(table, columns)
    if( validResult[0] ){
        // get connection from pool 
        pool1.getConnection(function(err, connection) { 
            if (!err){
                query(connection, req, res)   
                connection.release()
            } else {
                res.status(400).send('Pool connection failed: ' + err)
            }
        })
    }else{
        res.status(400).send(validResult[1] + ": " + validResult[2])
    }
}

exports.dbGet = dbGet

exports.dbPost = dbPost

exports.dbPut = dbPut

exports.dbDelete = dbDelete
