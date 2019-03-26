"use strict"
const express = require('express')
const router = express.Router()
const mysqlQuery = require('../../model/dbConnection')

//http://localhost:3000/api/user/users?age=29&gender=男&name=李测试
router.post('/:table', function(req, res, next){
  mysqlQuery.ReadWriteQuery(mysqlQuery.dbPost.addOne, req, res)
})

//http://localhost:3000/api/user/users?age=29&gender=男&name=李测试
router.get('/:table', function(req, res, next){
  mysqlQuery.ReadOnlyQuery(mysqlQuery.dbGet.findByColumn, req, res)
})

//http://localhost:3000/api/user/appointments/users/?gender=女&limit=3
router.get('/:table/:table2', function(req, res, next){
  mysqlQuery.ReadOnlyQuery(mysqlQuery.dbGet.findByColumn, req, res)
})

//http://localhost:3000/api/user/users?obj-gender=男&name=黄测试&obj-age=29
router.put('/:table', function(req, res, next){
  mysqlQuery.ReadWriteQuery(mysqlQuery.dbPut.update, req, res)
})

//http://localhost:3000/api/user/users?obj-gender=男&obj-name=李测试&obj-age=29
router.delete('/:table', function(req, res, next){
  mysqlQuery.ReadWriteQuery(mysqlQuery.dbDelete.delete, req, res)
})

module.exports = router