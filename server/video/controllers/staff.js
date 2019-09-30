'use strict'

const { validationResult } = require('express-validator/check')

const Model = require('../models').staff

module.exports = {
  create(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    return Model.create(req.body,
    {
      include: Object.values(Model.associations) // array of associations
    })
    .then(results => res.status(201).send(results))
    .catch(error => res.sendStatus(400).send(error))
  },
  retrieve(req, res) {
    return Model
      .findById(req.params.id,
        {include: Object.values(Model.associations)}// array of associations
      )
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
  update(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    return Model
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
  delete(req, res) {
    return Model
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
          .then(() => res.sendStatus(204))
          .catch((error) => res.sendStatus(400).send(error))
      })
      .catch((error) => res.sendStatus(400).send(error))
  },
}
