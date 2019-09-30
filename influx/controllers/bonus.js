'use strict'

const model = require('../models').model
const measurement = 'bonus'
const { validationResult } = require('express-validator/check')

module.exports = {
  create(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    model.writeMeasurement(measurement, req.body)
    .then(() => {
      return model.query(`
        select * from ${measurement}
        order by time desc
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
    model.query(`
      select * from ${measurement}
      order by time desc
    `)
    .then(response => {
      res.status(200).send(response)
    })
    .catch(error =>{
      res.status(400).send(error)
    })
  }
}
