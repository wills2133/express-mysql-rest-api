'use strict'

const { validationResult } = require('express-validator/check')

const Model = require('../models').profile

module.exports = {
  retrieve(req, res) {
    return Model
      .findAndCountAll()
      .then((results) => {
        if (!results) {
          return res.status(404).json({ message: 'Result Not Found' })
        }
        return res.status(200).send(results)
      })
      .catch((error) => res.sendStatus(400).send(error))
  }
}
