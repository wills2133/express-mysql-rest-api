'use strict'

const { check } = require('express-validator/check')

module.exports = {
  PUT: [
    check('name').optional().isLength({ min: 2 }).withMessage('must be at least 2 chars long'),
    check('description').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('season').optional().isInt().withMessage('must be num'),
    check('episode').optional().isInt().withMessage('must be at least 1 chars long')
  ],
  POST: [
    check('name').optional().isLength({ min: 2 }).withMessage('must be at least 2 chars long'),
    check('description').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('season').optional().isInt().withMessage('must be num'),
    check('episode').optional().isInt().withMessage('must be at least 1 chars long')
  ]
}
