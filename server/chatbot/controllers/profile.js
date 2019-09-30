'use strict'

const { validationResult } = require('express-validator/check')
const Model = require('../models').profile

module.exports = {
  retrieve(req, res) {
    if(req.query.uuid){
      return Model
      .findOne({
        where: {uuid: req.query.uuid},
        include: Object.values(Model.associations)// array of associations
      })
      .then((result) => {
        if (!result) {
          return res.status(404).json({ message:'uuid ' + req.query.uuid + ' Not Found' })
        }else{
          return res.status(200).send( result )
        }
      })
      .catch((error) => res.status(400).send(error));
    }
    else{
      return Model
      .findById(req.params.id,
        // {
        //   include: Object.values(Model.associations)// array of associations
        // }
      )
      .then((result) => {
        if (!result) {
          return res.status(404).json({message:'uuid ' + req.query.uuid + ' Not Found' })
        }else{
          return res.status(200).send(result)
        }
      })
      .catch((error) => res.status(400).send(error));
    }
  },
  
  create(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    return Model.create(req.body,
    {
      useMaster : true,
      include: Object.values(Model.associations) // array of associations
      // include: [{ all: true, nested: true }] 
    })
    .then(result => res.status(201).send(result))
    .catch(error => res.status(400).send(error))
  },
  
  update(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    if(req.query.uuid){
      return Model
      .findOne({
        where: {uuid: req.query.uuid},
        // include: Object.values(Model.associations)// array of associations
      })
      .then(result => {
        if (!result) {
          return res.status(404).json({ message: 'Result Not Found' })
        }
        return result
          .update(req.body,
            {
              useMaster : true,
              include: Object.values(Model.associations) // array of associations
            }
          )
          .then(() => res.status(200).send(result))
      })
      .catch((error) => {console.log(error); res.status(400).send(error)})
    }
    else{
      return Model
      .findById(req.params.id,
        {
          // include: Object.values(Model.associations)// array of associations
        }
      )
      .then(result => {
        if (!result) {
          return res.status(404).json({message: 'Result Not Found'})
        }
        return result
          .update(req.body,
            {
              useMaster : true,
              // include: Object.values(Model.associations) // array of associations
            }
          )
          .then(() => res.status(200).send(result))
      })
      .catch((error) => res.status(400).send(error))
    }
  },
  /*
  delete(req, res) {
    if(req.query.uuid){
      return Model
      .findOne({
        where: {uuid: req.query.uuid},
        // include: Object.values(Model.associations)// array of associations
      })
      .then(result => {
        if (!result) {
          return res.status(404).json({ message: 'Result Not Found' })
        }
        return result
          .destroy({
            useMaster : true
          })
          .then(() => res.sendStatus(204))
      })
      .catch((error) => res.status(400).send(error));
    }else{
      return Model
      .findById(req.params.id)
      .then(result => {
        if (!result) {
          return res.status(404).json({ message: 'Result Not Found' })
        }
        return result
          .destroy({
            useMaster : true
          })
          .then(() => res.sendStatus(204))
      })
      .catch((error) => res.status(400).send(error))
    }
  },
  */
}
