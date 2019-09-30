'use strict'

const axios = require('axios')
const MAX_OPERATION_COUNT = 50

module.exports = {
  create(req, res) {
    const baseUrl = req.protocol + '://' + req.get('host')
    const requests = req.body.map(request => {
      console.log("req.url.split('batch')[0]", req.url.split('batch')[0] )
      return axios({
        method: request.method,
        url: baseUrl + req.url.split('batch')[0] + request.param,
        data: request.body
      })
    })
    if (requests.length > MAX_OPERATION_COUNT) {
      return res.sendStatus(422).send()
    }
    return Promise
      .all(requests)
      .then(response => {
        return res.status(201).send({
          message: 'success'
        })
       })
      .catch(error => {
        return res.sendStatus(400).send({
          error: error
        })
      })
  }
}
