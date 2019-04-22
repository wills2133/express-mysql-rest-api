'use strict'

const version = 'v1'
const code = 'api'
// generalize
// singular query
const modelNames = ['video', 'source', 'rating', 'staff', 'tag']
const modelMiddleWare = {}
const modelController = {}
const mdoelResourcePath = {}
modelNames.forEach( modelName => {
  modelMiddleWare[modelName] = require('../middlewares')[modelName]
  modelController[modelName] = require('../controllers')[modelName]
  mdoelResourcePath[modelName] = `/${version}/${code}/${modelName}/:id?`
})
// plural query
const modelsNames = ['videos', 'staffs', 'sources', 'tags', 'ratings']
const modelsMiddleWare = {}
const modelsController = {}
const mdoelsResourcePath = {}
modelsNames.forEach( modelsName => {
  modelsMiddleWare[modelsName] = require('../middlewares')[modelsName]
  modelsController[modelsName] = require('../controllers')[modelsName]
  mdoelsResourcePath[modelsName] = `/${version}/${code}/${modelsName}`
})

module.exports = (app) => {
  // With Resources Path
  modelsNames.forEach( modelsName => {
    app.post(mdoelsResourcePath[modelsName], modelsMiddleWare[modelsName].create, modelsController[modelsName].create)
    app.get(mdoelsResourcePath[modelsName], modelsController[modelsName].retrieve)
  })

  modelNames.forEach( modelName => {
    app.post(mdoelResourcePath[modelName], modelMiddleWare[modelName].create, modelController[modelName].create)
    app.get(mdoelResourcePath[modelName], modelController[modelName].retrieve)
    app.put(mdoelResourcePath[modelName], modelMiddleWare[modelName].update, modelController[modelName].update)
    app.delete(mdoelResourcePath[modelName], modelController[modelName].delete)
  })
}
