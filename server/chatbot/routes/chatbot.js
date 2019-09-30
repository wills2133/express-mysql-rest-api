'use strict'

const version = 'v1'
const code = 'api'
const resource = 'chatbot'
const path = `/${version}/${code}/${resource}`

module.exports = {
    controller : require('../controllers')[resource],
    path : path,
}
