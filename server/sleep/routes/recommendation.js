'use strict'

const version = 'v1'
const code = 'api'
const resource = 'recommendation'
const path = `/${version}/${code}/${resource}/:id?`

module.exports = {
    controller : require('../controllers')[resource],
    middleware : require('../middlewares')[resource],
    path : path,
}