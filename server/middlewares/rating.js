'use strict'

const { check } = require('express-validator/check')

module.exports = {
  update: [
  ],
  create: [
    // check('rating').optional().isInt().withMessage('must be num'),
    check('hitrate').optional().isInt().withMessage('must be num'),
  ]
}
