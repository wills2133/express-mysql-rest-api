'use strict'

const version = 'v1'
const code = 'api'
const resource = 'measuring'
const path = `/${version}/${code}/${resource}`

module.exports = {
    controller : require('../controllers')[resource],
    middleware : require('../middlewares')[resource],
    path : path,
}