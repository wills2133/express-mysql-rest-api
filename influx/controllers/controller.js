'use strict'

const model = require('../models').model

module.exports = {
  create(req, res) {
    model.writeMeasurement(req.params.measurement, req.body)
    .then(() => {
      return model.query(`
        select * from ${req.params.measurement}
        order by time desc
        limit 1
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
}
