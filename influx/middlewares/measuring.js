'use strict'

const { check, query } = require('express-validator/check')

module.exports = {
  retrieve: [
    query('columns').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    query('limit').optional().isInt({min: 1}).withMessage('must be integer above 0'),
    query('orderby').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    query('order').optional().custom(value => {
      if (value != 'desc' && value != 'asc' ) {
        return Promise.reject('order is desc or asc')
      }else{
        return Promise.resolve()
      }
    }),
    query('offset').optional().isInt({min: 1}).withMessage('must be integer above 0'),
    query('from').optional().isAfter('1677-09-21').withMessage('must be timeformat after 1677-09-21T00:12:43.145224195Z'),
    query('to').optional().isBefore('2262-04-11').withMessage('must be timeformat before 1677-09-21T00:12:43.145224195Z'),
    query('range').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    query('timezone').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
  ],
  update: [
    // check('*.tags.deviceid').optional().isInt({min: 1}).withMessage('must be integer above 0'),
    check('*.tags.device').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    // check('*.tags.sensorid').optional().isInt({min: 1}).withMessage('must be integer above 0'),
    check('*.tags.sensor').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('*.tags.uuid').optional().isUUID().withMessage('must be uuid format'),
    check('*.tags.lat').optional().isFloat({min: -90.0, max: 90.0}).withMessage('must be between -90 and 90'),
    check('*.tags.lon').optional().isFloat({min: -180, max: 180}).withMessage('must be between -180 and 180'),
    check('*.tags.unit').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('*.fields.value').optional().isFloat().withMessage('must be integer above 0'),
    check('*.timestamp').optional().isInt({min: 1}).withMessage('must be integer above 0'),
  ],
  create: [
    // check('*.tags.deviceid').optional().isInt({min: 1}).withMessage('must be integer above 0'),
    check('*.tags.device').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    // check('*.tags.sensorid').optional().isInt({min: 1}).withMessage('must be integer above 0'),
    check('*.tags.sensor').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('*.tags.uuid').optional().isUUID().withMessage('must be uuid format'),
    check('*.tags.lat').optional().isFloat({min: -90.0, max: 90.0}).withMessage('must be between -90 and 90'),
    check('*.tags.lon').optional().isFloat({min: -180, max: 180}).withMessage('must be between -180 and 180'),
    check('*.tags.unit').optional().isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    check('*.fields.value').optional().isFloat().withMessage('must be integer above 0'),
    check('*.timestamp').optional().isInt({min: 1}).withMessage('must be integer above 0'),
  ]
}
