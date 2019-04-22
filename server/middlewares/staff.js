'use strict'

const { check } = require('express-validator/check')

module.exports = {
  update: [
  ],
  create: [
    // check('name').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    // check('position').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
  ]
}
