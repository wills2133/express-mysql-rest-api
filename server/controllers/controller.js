'use strict'

const { validationResult } = require('express-validator/check')

const Models = {}
Models['video'] = require('../models').video
Models['rating'] = require('../models').rating
Models['staff'] = require('../models').staff
Models['source'] = require('../models').source
Models['tag'] = require('../models').tag

module.exports = {
  POST(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    return Models[req.params.model].create(req.body,
    {
      include: Object.values(Models[req.params.model].associations)
    })
    .then(results => res.status(201).send(results))
    .catch(error => res.sendStatus(400).send(error))
  },
  GET(req, res) {
      return Models[req.params.model]
      .findById(req.params.id, 
      {
        include: Object.values(Models[req.params.model].associations)
      })
      .then((result) => {
        if (!result) {
          return res.sendStatus(404).send({
            message: 'Result Not Found',
          });
        }
        return res.status(200).send(result)
      })
      .catch((error) => res.sendStatus(400).send(error));
  },
  PUT(req, res) {
    console.log("req", req.body);
    
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    return Models[req.params.model]
      .findById(req.params.id)
      .then(result => {
        if (!result) {
          return res.sendStatus(404).send({
            message: 'Result Not Found',
          })
        }
        return result
          .update(req.body,
          {
            useMaster : true
          })
          .then(() => res.status(200).send(result))
          .catch((error) => res.sendStatus(400).send(error))
      })
      .catch((error) => res.sendStatus(400).send(error))
  },
  DELETE(req, res) {
    return Models[req.params.model]
      .findById(req.params.id)
      .then(result => {
        if (!result) {
          return res.sendStatus(400).send({
            message: 'Result Not Found',
          })
        }
        return result
          .destroy({
            useMaster : true
          })
          .then(() => res.sendStatus(204).send())
          .catch((error) => res.sendStatus(400).send(error))
      })
      .catch((error) => res.sendStatus(400).send(error))
  },
}
