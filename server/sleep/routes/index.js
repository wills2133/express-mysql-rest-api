'use strict'

// Import resources here
const profile = require('./profile')
const profiles = require('./profiles')
const history = require('./history')
const histories = require('./histories')
const diabetesrisk = require('./diabetesrisk')
const diabetesrisks = require('./diabetesrisks')
const familyhistory = require('./familyhistory')
const familyhistories = require('./familyhistories')
const diary = require('./diary')
const acupoint = require('./acupoint')
module.exports = (app) => {
  // Assemble all resources into an array
  const resources = [
    profile,
    profiles,
    history,
    histories,
    diabetesrisk,
    diabetesrisks,
    familyhistory,
    familyhistories,
    diary,
    acupoint,
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
    }

    if (resource.controller.create) {
      app.post(resource.path, resource.controller.create)
    }
    if (resource.controller.retrieve) { 
      app.get(resource.path, resource.controller.retrieve)
    }
    if (resource.controller.update) {
      app.put(resource.path, resource.controller.update)
    }
    if (resource.controller.delete) {
      app.delete(resource.path, resource.controller.delete)
    }
  })
}
