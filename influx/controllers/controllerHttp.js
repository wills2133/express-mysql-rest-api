'use strict'

const axios = require('axios')
const MAX_OPERATION_COUNT = 50
const ip = '192.168.1.182'
const port = '8086'
const database = 'express_response_db'

module.exports = {
  create(req, res) {
    const baseUrl = req.protocol + '://' + ip + ':' + port
    const requests = req.body.map(point => {
        console.log(req.params.measurement + ',' 
        + Object.entries(point.tags).map(tag => tag[0]+'='+tag[1]).join(',') + ' '
        + Object.entries(point.fields).map(field => field[0]+'='+field[1]).join(','))
        return axios({
          method: 'post',
          params: {db: database},
          url: baseUrl + '/write',
          data: req.params.measurement + ',' 
          + Object.entries(point.tags).map(tag => tag[0]+'='+tag[1]).join(',') + ' '
          + Object.entries(point.fields).map(field => field[0]+'='+field[1]).join(',')
        })
      }
    )
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
  },
  retrieve(req, res) {
    const baseUrl = req.protocol + '://' + ip + ':' + port
    return axios({
      method: 'post',
      params: {db: database},
      url: baseUrl + '/query',
      data: `q=SELECT * FROM "${req.params.measurement}" order by time desc`
    })
    .then(response => {
      res.status(200).send(response.data)
    })
    .catch(error =>{
      res.status(400).send(error)
    })
  }
}
