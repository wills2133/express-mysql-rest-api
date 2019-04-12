'use strict'

const Influx = require('influx');
const fs = require('fs');
const schemas = [];


fs.readdirSync(__dirname + '/schemas')
.forEach(file => {
  schemas.push(require('./schemas/'+ file)(Influx))
});

const model = new Influx.InfluxDB({
  host: '192.168.1.182',
  port: 8086,
  database: 'express_response_db',
  schema: schemas
})

module.exports = model
