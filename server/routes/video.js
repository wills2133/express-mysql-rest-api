'use strict'

const videosMiddleware = require('../middleware').videos
const videoMiddleware = require('../middleware').video

const videosController = require('../controllers').videos
const videoController = require('../controllers').video

const version = 'v1'
const code = 'api'
const models = 'videos'
const model = 'video'
const resourcesPath = `/${version}/${code}/${models}`
const resourcePath = `/${version}/${code}/${model}/:id?`

module.exports = (app) => {
  // With Resources Path
  app.post(resourcesPath, videosMiddleware.create, videosController.create)
  app.get(resourcesPath, videosController.retrieve)

  // With Resource Path
  app.post(resourcePath, videosMiddleware.create, videoController.create)
  app.get(resourcePath, videoController.retrieve)
  app.put(resourcePath, videoMiddleware.update, videoController.update)
  app.delete(resourcePath, videoController.delete)
}
