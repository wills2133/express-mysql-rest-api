'use strict'

const { check } = require('express-validator/check')

module.exports = {
  update: [
  ],
  create: [
    check('season').optional().isInt().withMessage('must be num'),
    check('episode').optional().isInt().withMessage('must be num')
  ]
}
