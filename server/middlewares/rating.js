'use strict'

const { check } = require('express-validator/check')

module.exports = {
  PUT: [
  ],
  POST: [
    // check('rating').optional().isInt().withMessage('must be num'),
    check('hitrate').optional().isInt().withMessage('must be num'),
  ]
}
