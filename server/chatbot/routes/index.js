'use strict'

// Import resources here
const profile = require('./profile')
const profiles = require('./profiles')
const faceImg = require('./faceImg')
const faceImgs = require('./faceImgs')
const chat = require('./chat')
const chatbot = require('./chatbot')

module.exports = (app) => {
  // Assemble all resources into an array
  const resources = [
    profile,
    profiles,
    faceImg,
    faceImgs,
    chat,
    chatbot
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
