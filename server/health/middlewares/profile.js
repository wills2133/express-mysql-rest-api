'use strict'

const { check } = require('express-validator/check')

module.exports = {
  update: [
    check('uuid').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('education').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('drink').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('smoke').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('sedentary').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('vegetarian').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('diseaseHistories').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('height').optional().isInt().withMessage('must be num'),
    check('weight').optional().isInt().withMessage('must be num'),
  ],
  create: [
    check('uuid').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('education').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('drink').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('smoke').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('sedentary').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('vegetarian').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('diseaseHistories').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('height').optional().isInt().withMessage('must be num'),
    check('weight').optional().isInt().withMessage('must be num'),
  ],
  retrieve: [
  ]
}
