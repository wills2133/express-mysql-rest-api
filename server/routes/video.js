'use strict'

const version = 'v1'
const code = 'api'
 
const controllerDispatch = require('../controllers').dispatch
const middleWareDispatch = require('../middlewares').dispatch
const baseResourcPath = `/${version}/${code}/`

module.exports = (app) => {
  // batch operation
  app.post(baseResourcPath + 'batch', (req, res) => {
    try {
      const responses = []
      req.body.forEach((elem) => {
        if (!['post', 'put', 'get', 'delete'].includes(elem.method)){
          throw BreakException
        }
        app.runMiddleware(baseResourcPath + elem.param, {
          connection: {},
          method:elem.method,
          // query: { token: 'tk-12345'},
          body: elem.body
        }, (query, response, head) => {
          responses.push(response)
          //finish collecting responses from all requests
          if(responses.length == req.body.length){ 
            res.status(201).send(responses)
          }
        });
      })
    } catch (e) {
      res.status(500).send("wrong batch method")
    }
  }) // order is important for path matching
  
  // single operation
  app.all(baseResourcPath + ':model/:id?', middleWareDispatch.dispatch, controllerDispatch.dispatch)

}
