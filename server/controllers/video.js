'use strict'

const { validationResult } = require('express-validator/check')

const Video = require('../models').video


module.exports = {
  create(req, res) {
    console.log(req.body)
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    return Video.create(req.body,
    {
      include: Object.values(Video.associations) // array of associations
    })
    .then(results => res.status(201).send(results))
    .catch(error => res.sendStatus(400).send(error))
  },
  retrieve(req, res) {
    return Video
      .findById(req.params.id, 
      {
        include: [Video.associations.rating]
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
  update(req, res) {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    
    return Video
      .findById(req.params.id)
      .then(result => {
        if (!result) {
          return res.sendStatus(404).send({
            message: 'Result Not Found',
          })
        }
        return result
          .update({
            long: req.body.long,
            short: req.body.short
          },
          {
            useMaster : true
          })
          .then(() => res.status(200).send(result))
          .catch((error) => res.sendStatus(400).send(error))
      })
      .catch((error) => res.sendStatus(400).send(error))
  },
  delete(req, res) {
    return Video
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
