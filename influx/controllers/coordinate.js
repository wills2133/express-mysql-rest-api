'use strict'

const model = require('../models').model
const measurement = 'coordinate'
const { validationResult } = require('express-validator/check')

module.exports = {
  create(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    model.writeMeasurement(measurement, req.body)
    .then((res) => {
      return model.query(`
        select * from ${measurement}
        order by time desc limit 1
      `)
    })
    .then(response => {
      // console.log('response', response)
      res.status(200).send(response)
    })
    .catch(error =>{
      // console.log('error', error)
      res.status(400).send(error)
    })
  },
  retrieve(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    
    let query = { //default query
      columns: '*',
      limit: 10,
      orderby: 'time',
      order: 'desc',
      offset: 0,
      from: '1677-09-21T00:12:43.145224195Z', //influxdb minium time
      to:   '2262-04-11T23:47:16.854775806Z', //influxdb maxium time
      range: '',
      timezone: 'Asia/Shanghai',
      forward: '',
      backward: '',
      where: '' //{"city":"南京", time:2019-05-05} 支持模糊搜索
    }

    for( let key in req.query ){ //overwrite query with req.query
      if( key == 'range' && req.query['range'][0] == '-' ){
        query.from = !!req.query['to'] ? req.query['to'] : query.to
        query.forward = req.query['range']
      }else if( key == 'range' && req.query['range'][0] == '+' ){
        query.to = !!req.query['from'] ? req.query['from'] : query.from
        query.backward = req.query['range']
      }else if( key == 'where'){
        const parseWhere = JSON.parse(req.query.where)
        for (const key in parseWhere) { 
          // query.where += `"${key}"='${parseWhere[key]}' AND `
          query.where += `"${key}"=~/[${parseWhere[key]}]/ AND `
        }
      }else{
        query[key] = req.query[key]
      }
    }

    const statement = `
      SELECT ${query.columns} FROM ${measurement}
      WHERE ${query.where}
      time > '${query.from}' ${query.forward} AND time < '${query.to}' ${query.backward}
      ORDER BY ${query.orderby} ${query.order}
      LIMIT ${query.limit};
      SELECT COUNT(*) AS total FROM ${measurement}
      WHERE time > '${query.from}' ${query.forward} AND time < '${query.to}' ${query.backward}
      tz('${query.timezone}')
    `
    console.log("STATEMENT", statement.split('\n      ').join(' '));
    
    model.query(statement)
    .then(response => {
      res.status(200).send(response)
    })
    .catch(error =>{
      res.status(400).send(error)
    })
  }
}
