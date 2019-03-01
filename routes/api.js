var express = require('express');
var router = express.Router();
var mysqlQuery = require('../model/dbconnection');

// /* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource');
// });

// // 响应一个JSON数据
// var responseJSON = function (res, ret) {
//   if(typeof ret === 'undefined') { 
//     res.json({code:'-200', msg: 'query failded!'}); 
//   } else { 
//     res.json(ret);
//   }
// };

//http://localhost:3000/api/db/spo_user?age=26&gender=男
router.get('/db/:table', function(req, res, next){
  mysqlQuery.get(req, res)
});

module.exports = router;