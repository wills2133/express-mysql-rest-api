'use strict'

const { check } = require('express-validator/check')

module.exports = {
  PUT: [
  ],
  POST: [
    check('name').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
  ]
}
