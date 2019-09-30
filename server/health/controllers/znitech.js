'use strict'

const axios = require('axios')
const baseUrl = "http://ihealth.znitech.com:18778/"
// const token = '4X7r8mdcQwhOEa+kQUm86g=='
module.exports = {
  retrieve(req, res) {
    if (!req.query.endpoint) {
      return res.status(200).json({ message:'parameter endpoint is necessary' })
    }
    if (!req.query.userId) {
      return res.status(200).json({ message:'parameter userId is necessary' })
    }
    if (!req.query.deviceId) {
      return res.status(200).json({ message:'parameter deviceId is necessary' })
    }
    // return axios.get(baseUrl, {params:req.query, headers: {'authorization': `Bearer ${token}`}})
    console.log(baseUrl+req.query.endpoint.split('-').join('/'))
    return axios.get(baseUrl+req.query.endpoint.split('-').join('/'), {params:req.query})
    .then( (response) => {
      return res.status(200).json( JSON.parse(response.data) )
    })
    .catch( (error) => {
      return res.sendStatus(400)
    });
  },
}


