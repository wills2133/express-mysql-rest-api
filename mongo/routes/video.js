'use strict'

const version = 'v1'
const code = 'api'
// generalize
const modelNames = ['video', 'source', 'rating', 'staff', 'tag']
const modelMiddleWare = {}
const modelController = {}
const mdoelResourcePath = {}
modelNames.forEach( modelName => {
  modelMiddleWare[modelName] = require('../middleware')[modelName]
  modelController[modelName] = require('../controllers')[modelName]
  mdoelResourcePath[modelName] = `/${version}/${code}/${modelName}/:id?`
})

const videosMiddleware = require('../middleware').videos
const videosController = require('../controllers').videos
const models = 'videos'
const resourcesPath = `/${version}/${code}/${models}`

module.exports = (app) => {
  // With Resources Path
  app.post(resourcesPath, videosMiddleware.create, videosController.create)
  app.get(resourcesPath, videosController.retrieve)

  modelNames.forEach( modelName => {
    app.post(mdoelResourcePath[modelName], modelMiddleWare[modelName].create, modelController[modelName].create)
    app.get(mdoelResourcePath[modelName], modelController[modelName].retrieve)
    app.put(mdoelResourcePath[modelName], modelMiddleWare[modelName].update, modelController[modelName].update)
    app.delete(mdoelResourcePath[modelName], modelController[modelName].delete)
  })
}
