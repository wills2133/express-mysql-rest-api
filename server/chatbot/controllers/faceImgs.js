'use strict'

const { validationResult } = require('express-validator/check')
/*
const axios = require('axios')
const baseUrl = 'http://101.132.175.245:8080/v1/Fyslngy/Resident'
const token = '4X7r8mdcQwhOEa+kQUm86g=='
module.exports = {
  retrieve(req, res) {
    // if (!req.query.q) {
    //   return res.status(200).json({ message:'url parameter q is necessary' })
    // }
    return axios.get(baseUrl, {headers: {'authorization': `Bearer ${token}`}})
    .then( (response) => {
      let result = []
      if (Array.isArray(response.data.results)) {
        result = response.data.results.map(item => {
          return {
            uuid: item.externalId,
            name: item.lastName + item.firstName,
            url: `https://sst-oss.oss-cn-shanghai.aliyuncs.com/avatar/${item.externalId}.jpg`
          }
        })
      }
      return res.status(200).json( {count: result.length, rows: result} )
    })
    .catch( (error) => {
      // console.log('---error', error.response)
      return res.sendStatus(400)
    });
  },
}
*/
const Model = require('../models').faceImg

module.exports = {
  retrieve(req, res) {
    return Model
      .findAndCountAll({})
      .then((results) => {
        if (!results) {
          return res.status(404).json({ message: 'Result Not Found' })
        }
        return res.status(200).send(results)
      })
      .catch((error) => res.sendStatus(400).send(error))
  }
}
