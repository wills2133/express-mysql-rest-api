'use strict'

const { check } = require('express-validator/check')

module.exports = {
  update: [
    check('uuid').optional().isLength({ min: 1 }).withMessage('can not be empty'),
    check('sleep').optional().isLength({ min: 1 }).withMessage('can not be empty'),
    check('sport').optional().isLength({ min: 1 }).withMessage('can not be empty'),
    check('allergy').optional().isLength({ min: 1 }).withMessage('can not be empty'),
    check('diseaseHistories').optional().isLength({ min: 1 }).withMessage('can not be empty'),
    check('families').optional().isLength({ min: 1 }).withMessage('can not be empty'),
    check('surgeryHistories').optional().isLength({ min: 1 }).withMessage('can not be empty'),
    check('systolic').optional().isNumeric().withMessage('must be num'),
    check('diastolic').optional().isNumeric().withMessage('must be num'),
    check('glucose').optional().isNumeric().withMessage('must be num'),
    check('spo2').optional().isNumeric().withMessage('must be num'),
    check('temperature').optional().isNumeric().withMessage('must be num'),
    check('bmi').optional().isNumeric().withMessage('must be num'),
    check('height').optional().isNumeric().withMessage('must be num'),
    check('weight').optional().isNumeric().withMessage('must be num'),
    check('smoker').optional().isBoolean().withMessage('must be boolean'),
    check('drink').optional().isBoolean().withMessage('must be boolean'),
  ],
  create: [
    check('uuid').isLength({ min: 1 }).withMessage('can not be empty'),
    check('sleep').optional().isLength({ min: 1 }).withMessage('can not be empty'),
    check('sport').optional().isLength({ min: 1 }).withMessage('can not be empty'),
    check('allergy').optional().isLength({ min: 1 }).withMessage('can not be empty'),
    check('diseaseHistories').optional().isLength({ min: 1 }).withMessage('can not be empty'),
    check('families').optional().isLength({ min: 1 }).withMessage('can not be empty'),
    check('surgeryHistories').optional().isLength({ min: 1 }).withMessage('can not be empty'),
    check('systolic').optional().isNumeric().withMessage('must be num'),
    check('diastolic').optional().isNumeric().withMessage('must be num'),
    check('glucose').optional().isNumeric().withMessage('must be num'),
    check('spo2').optional().isNumeric().withMessage('must be num'),
    check('temperature').optional().isNumeric().withMessage('must be num'),
    check('bmi').optional().isNumeric().withMessage('must be num'),
    check('height').optional().isNumeric().withMessage('must be num'),
    check('weight').optional().isNumeric().withMessage('must be num'),
    check('smoker').optional().isBoolean().withMessage('must be boolean'),
    check('drink').optional().isBoolean().withMessage('must be boolean'),
  ],
  retrieve: [
  ]
}
