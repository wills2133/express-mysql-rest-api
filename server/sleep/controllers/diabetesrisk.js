'use strict'

const { validationResult } = require('express-validator/check')

const Model = require('../models').profile
const axios = require('axios')

const influxParams = [
  {
    api:'measuring',
    param:{
     key:'weight',
     columns:'mean(value)', 
     where:'{"sensor":"fake_weight_sensor"}'
     },
   },
  {
    api:'measuring',
    param:{
     key:'heartrate',
     columns:'mean(value)', 
     where:'{"sensor":"fake_heartrate_sensor"}'
     },
   },
  {
    api:'bloodpressure',
    param:{
     key:'systolic',
     columns:'mean(systolic)', 
     from:'2019-05-21',
     to:'2019-05-22',
     where:'{"sensor":"fake_blood_pressure_sensor"}'
     },
   },
  {
    api:'bloodpressure',
    param:{
     key:'diastolic',
     columns:'mean(diastolic)', 
     from:'2019-05-21',
     to:'2019-05-22',
     where:'{"sensor":"fake_blood_pressure_sensor"}'
     },
   },
  {
    api:'measuring',
    param:{
     key:'glucose',
     columns:'mean(value)', 
     where:'{"sensor":"fake_blood_glucose_sensor"}'
     },
   },
  {
    api:'measuring',
    param:{
     key:'insulin',
     columns:'mean(value)', 
     where:'{"sensor":"fake_insulin_sensor"}'
     },
   },
  {
    api:'measuring',
    param:{
     key:'uricacid',
     columns:'mean(value)', 
     where:'{"sensor":"fake_uricacid_sensor"}'
     },
   },
  {
    api:'measuring',
    param:{
     key:'triglycerides',
     columns:'mean(value)', 
     where:'{"sensor":"fake_triglycerides_sensor"}'
     },
   },
  {
    api:'measuring',
    param:{
     key:'serumcholesterol',
     columns:'mean(value)', 
     where:'{"sensor":"fake_serumcholesterol_sensor"}'
     },
   },
 ]

 const computedRisk = (assemble)=>{
  const ref = {
    weight:[70, 10],
    heartrate:[50, 30],
    systolic:[80,10],
    diastolic:[105,10],
    glucose:[5.5,1],
    insulin:[5,1],
    uricacid:[5,1],
    triglycerides:[1.5,0.4],
    serumcholesterol:[3,0.2],
  }
  let sum = 0
  let count = 0
  Object.keys(ref).forEach((key)=>{
    sum += Math.abs(assemble[key]-ref[key][0]-ref[key][1]/2) / ref[key][1]
    count++
  })
  const result = !!sum&&count>0? sum/count*100 : 0
  assemble['risk'] = parseFloat(result.toFixed(2)) 
  return assemble 
}

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
        const assemble = {
          date_of_birth: '1990-01-01',
          gender: '女',
          smoker: result.dataValues['smoker'],
          diabetesFamily: result.dataValues.familyhistories[0]['familydiabetes'],
          gestational: result.dataValues.histories[0]['gestational'],
          height: result.dataValues.histories[0]['height'],
        }
        const baseUrl = req.protocol + '://' + req.get('host')
        const requests = influxParams.map(request => {
            return axios({
              method: 'get',
              url: baseUrl + '/v1/api/' + request.api,
              params: request.param
            })
          }
        )
        return Promise
        .all(requests)
        .then(response => {
          response.forEach((resp)=>{
            assemble[resp.config.params.key] =
                resp.data.length>0 && resp.data[0].length>0 ? parseFloat(resp.data[0][0].mean.toFixed(2)) : -1
          })
          computedRisk(assemble)
          return res.status(201).send(assemble)
        })
        .catch(error => {
          return res.sendStatus(400).send({
            error: error
          })
        })
      })
      .catch((error) => res.sendStatus(400).send(error));
  },
  update(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    return Model
      .findById(req.params.id,
        {include: Object.values(Model.associations)}// array of associations
      )
      .then(result => {
        if (!result) {
          return res.sendStatus(404).send({
            message: 'Result Not Found',
          })
        }
        return result
          .update(req.body,
            {
              useMaster : true,
              include: Object.values(Model.associations) // array of associations
            }
          )
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
