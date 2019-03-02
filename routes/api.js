var express = require('express');
var router = express.Router();
var mysqlQuery = require('../model/dbConnection');

//http://localhost:3000/api/db/spo_user?age=26&gender=男
router.get('/db/:table', function(req, res, next){
  mysqlQuery.get(req, res)
});

//http://localhost:3000/api/db/spo_user?age=29&gender=男&name=李测试
router.post('/db/:table', function(req, res, next){
  mysqlQuery.post(req, res)
});

//http://localhost:3000/api/db/spo_user?age=29&gender=女&obj-name=李测试
router.put('/db/:table', function(req, res, next){
  mysqlQuery.put(req, res)
});

//http://localhost:3000/api/db/spo_user?age=29&gender=女&obj-name=李测试
router.delete('/db/:table', function(req, res, next){
  mysqlQuery.delete(req, res)
});

module.exports = router;