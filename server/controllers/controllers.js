'use strict'

const { validationResult } = require('express-validator/check')

const Models = {}
Models['videos'] = require('../models').video
Models['rating'] = require('../models').rating
Models['staffs'] = require('../models').staff

module.exports = {
  create(req, res) {
    
  },

  retrieve(req, res) {
    console.log("req.params", req.params)
    const where = {}
    if (req.query.where) {
      Object.keys( JSON.parse(req.query.where) ).forEach
      const parseWhere = JSON.parse(req.query.where)
      for (const key in parseWhere) { 
        if (parseWhere[key]) {
          where[key] = (key === 'id' || key === 'videoId') ? parseWhere[key] : { $like: '%' + parseWhere[key] + '%' }
        }
      }
    }
    if (!req.query.order) {
      req.query.order = '-updatedAt'
    }
    console.log("where", where)
    return Models[req.params.model]
      .findAndCountAll({
        offset: parseInt(req.query.skip ? req.query.skip : 0),
        limit: parseInt(req.query.limit ? req.query.limit : 50),
        order: req.query.order[0] == '-' ? [[req.query.order.slice(1), 'DESC']] : [[req.query.order, 'ASC']],
        where: where,
        include: Object.values(Models[req.params.model].associations), // array of associations
        distinct: true // count main rows instead of including sub objects
      })
      .then((results) => {
        if (!results) {
          return res.sendStatus(404).send({
            message: 'Result Not Found',
          })
        }
        return res.status(200).send(results)
      })
      .catch((error) => res.sendStatus(400).send(error))
  }
}
