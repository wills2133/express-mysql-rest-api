'use strict'

const { check } = require('express-validator/check')

module.exports = {
  PUT: [
  ],
  POST: [
    check('season').isInt().withMessage('must be num'),
    check('episode').optional().isInt().withMessage('must be num')
  ]
}
