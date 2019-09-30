'use strict'

const Influx = require('influx')
const fs = require('fs')
const path = require('path')
const config = require('../config/config').development
const schemas = []

//require schemas
fs.readdirSync(__dirname).filter(file => {
  return (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js')
}).forEach(file => {
  schemas.push(require('./'+ file)(Influx))
})

const model = new Influx.InfluxDB({...config, schema: schemas})

// create database
model.getDatabaseNames()
.then(names => {
  if (!names.includes(config.database)) {
    return model.createDatabase(config.database);
  }
})
.catch(err => {
  console.error(`Error creating Influx database!`, err);
})

module.exports = {
  model,
}

