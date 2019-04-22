const controllers = require('./controllers')
const controller = require('./controller')

const models = ['videos', 'staffs', 'sources', 'ratings', 'tags']
const model = ['video', 'source', 'rating', 'staff', 'tag']

module.exports = {
  dispatch(req, res) {
    if( models.includes(req.params.model) ){
      return controllers[req.method](req, res)
    }else if( model.includes(req.params.model) ){
      return controller[req.method](req, res)
    }else{
      return res.sendStatus(400).send("model not existed")
    }
  },
}