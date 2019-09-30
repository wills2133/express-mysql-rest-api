'use strict'

const { validationResult } = require('express-validator/check')
/*
const axios = require('axios')
const baseUrl = 'http://101.132.175.245:8080/v1/Fyslngy/Resident'
const token = '4X7r8mdcQwhOEa+kQUm86g=='
module.exports = {
  retrieve(req, res) {
    if (!req.params.id) {
      return res.status(200).json({ message:'uuid is necessary' })
    }
    return axios.get(baseUrl, {params:{where:{externalId: req.params.id}}, headers: {'authorization': `Bearer ${token}`}})
    .then( (response) => {
      let result = {}
      if (Array.isArray(response.data.results)) {
        if (response.data.results.length > 0){
          result = {
            uuid: response.data.results[0].externalId,
            name: response.data.results[0].lastName + response.data.results[0].firstName,
            url: `https://sst-oss.oss-cn-shanghai.aliyuncs.com/avatar/${response.data.results[0].externalId}.jpg`
          }
        }else{
          result = {
            message: "user not found"
          }
        }
      }
      return res.status(200).json( result )
    })
    .catch( (error) => {
      return res.sendStatus(400)
    });
  },
}
*/

const Model = require('../models').faceImg

module.exports = {
  retrieve(req, res) {
    return Model
    .findById(req.params.id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({message:'uuid ' + req.query.uuid + ' Not Found' })
      }else{
        return res.status(200).send(result)
      }
    })
    .catch((error) => res.status(400).send(error));
  },
  /*
  create(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    console.log("req.body", req.body)
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
