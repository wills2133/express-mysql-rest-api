'use strict'

const version = 'v1'
const code = 'api'
const resource = 'parse'
const path = `/${version}/${code}/${resource}/:id?`

module.exports = {
    controller : require('../controllers')[resource],
    middleware : require('../middlewares')[resource],
    path : path,
}