'use strict'

const { check } = require('express-validator/check')

module.exports = {
  update: [
    check('name').optional().isLength({ min: 2 }).withMessage('must be at least 2 chars long'),
    check('description').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long')
  ]
}
