'use strict'

// Import resources here
const bloodpressure = require('./bloodpressure')
const bloodpressures = require('./bloodpressures')
const znitech = require('./znitech')
const parse = require('./parse')

module.exports = (app) => {
  // Assemble all resources into an array
  const resources = [
    bloodpressure, 
    bloodpressures,
    znitech,
    parse,
  ]

  // Iterate and register all resources
  resources.forEach(resource => {
    if (resource.middleware) {
      if (resource.middleware.create && resource.controller.create) {
        app.post(resource.path, resource.middleware.create, resource.controller.create)
      }
      if (resource.middleware.update && resource.controller.update) {
        app.put(resource.path, resource.middleware.update, resource.controller.update)
      }
      if (resource.middleware.retrieve && resource.controller.retrieve) {
        app.get(resource.path, resource.middleware.retrieve, resource.controller.retrieve)
      }
    }else{
      if (resource.controller.create) {
        app.post(resource.path, resource.controller.create)
      }
      if (resource.controller.update) {
        app.put(resource.path, resource.controller.update)
      }
    }
    if (resource.controller.retrieve) {
      app.get(resource.path, resource.controller.retrieve)
    }
    if (resource.controller.delete) {
      app.delete(resource.path, resource.controller.delete)
    }
  })
}
