'use strict'

const { validationResult } = require('express-validator/check')

const Model = require('../models').diary
const Model2 = require('../models').acupoint
const Model2Model = require('../models').diaryXacupoint
const xkey = 'acupoints'
const xkey2 = 'uuid'

module.exports = {
  create(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    return Model.create(req.body, 
      {
        //filter 'through associaction' to prevent duplicate Model2 creation
        include: Object.values(Model.associations).filter(item => item.constructor.name == xkey),
        useMaster : true
      }
    )
    .then(result => { // result: created parent row
      //todo: transaction
      console.log()
      return Model2.findAll({
          where: {uuid: req.body[xkey]}
      })
      .then(result2 => { // result2: found child rows realted to parent row
        if (result2.length === 0) {
          return res.status(400).json({ message: 'meridian not found' })
        }
        return result.setAcupoints(result2)
        .then(result3 => res.status(201).send(result3)) // result3: created child2parent index
      })
    })
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
    .findById(req.params.id, {include: Object.values(Model.associations)})
    .then(result => {
      if (!result) {
        return res.sendStatus(404).send({
          message: 'Result Not Found',
        })
      }
      return result // result: found parent row to be updated
      .update(req.body,
      {
        //filter 'through associaction' to prevent duplicate Model2 creation
        include: Object.values(Model.associations).filter(item => item.constructor.name == xkey),
        useMaster : true
      })
      .then(result2 => { // result2: updated row
        //todo: transaction
        return Model2.findAll({
          where: {uuid: req.body[xkey]}
          // where: JSON.parse(`{"${xkey2}":[${req.body[xkey].map(i => '"'+i+'"')}]}`)
        })
        .then(result3 => { // result3: found child rows realted to parent row
          if (result3.length === 0) {
            return res.status(400).json({ message: 'meridian not found' })
          }
          return result2.setAcupoints(result3)
          .then(result4 => res.status(201).send(result4)) // result4: updated child2parent index
        })
      })
      // .catch((error) => res.sendStatus(400).send(error))
    })
    .catch((error) => res.sendStatus(400).send(error))
  },
  delete(req, res) {
    return Model
      .findById(req.params.id)
      .then(result => {
        if (!result) {
          return res.status(400).json({ message: 'Object Not Found' })
        }
        return result
          .destroy({
            useMaster : true
          })
          .then(() => res.sendStatus(204)) //delete succeed send 204 no content
          .catch((error) => res.sendStatus(400).send(error))
      })
      .catch((error) => res.sendStatus(400).send(error))
  },
}
