'use strict'

const batchController = require('../controllers').batch

const version = 'v1'
const code = 'api'
const model = 'batch'
const resourcePath = `/${version}/${code}/${model}`

module.exports = (app) => {
  app.post(resourcePath, batchController.create)

}
