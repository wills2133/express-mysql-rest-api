'use strict'

const version = 'v1'
const code = 'api'
const resource = 'chat'
const path = `/${version}/${code}/${resource}`

module.exports = {
    controller : require('../controllers')[resource],
    path : path,
}
