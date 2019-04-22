'use strict'

const { check } = require('express-validator/check')


module.exports = {
  POST: [
    // check('name').optional().isLength({ min: 2 }).withMessage('must be at least 2 chars long'),
    // check('description').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    // check('season').optional().isInt().withMessage('must be num'),
    // check('episode').optional().isInt().withMessage('must be at least 1 chars long')
    // check('*.name').optional().isLength({ min: 2 }).withMessage('must be at least 2 chars long'),
    // check('*.description').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    // check('*.season').optional().isInt().withMessage('must be num'),
    // check('*.episode').optional().isInt().withMessage('must be num'),
    // check('*.rating.rating').optional().isInt().withMessage('must be num'),
    // check('*.staffs.*.name').optional().isLength({ min: 1 }).withMessage('cannot be empty'),
  ]
}
