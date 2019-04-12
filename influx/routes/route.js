'use strict'

const version = 'v1'
const code = 'api'

const middleware = require('../middlewares').device
const controller = require('../controllers').controller
const resourcesPath = `/${version}/${code}/:measurement`

module.exports = (app) => {
  // With Resources Path
  app.post(resourcesPath, middleware.create, controller.create)
  // app.get(resourcesPath, controller.retrieve)
}
