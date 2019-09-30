'use strict'

const { validationResult } = require('express-validator/check')

const Model = require('../models').diabetesrisk

module.exports = {
  retrieve(req, res) {
    const dict = {'男': 1, '女':0}
    const where = {}
    /// overwrite
    if (req.query.where) {
      const parseWhere = JSON.parse(req.query.where)
      for (const key in parseWhere) {
        if (key == 'age') {
          if ( parseWhere[key] ) {
            const date = new Date()
            where['date_of_birth'] = { $like: '%' + (date.getFullYear() -  parseWhere[key]) + '%' }
          }
        }
        else if (parseWhere[key]) {
          where[key] = (key === 'id' || key === 'diabetesriskId') ? parseWhere[key] : { $like: '%' + parseWhere[key] + '%' }
          if (key == 'gender') {
            where[key] = dict[ parseWhere[key] ]
          }
        }
      }
    }
    ///
    if (!req.query.order) {
      req.query.order = '-updatedAt'
    }
    console.log("where", where)
    return Model
      .findAndCountAll({
        include: Object.values(Model.associations), // array of associations
        offset: parseInt(req.query.skip ? req.query.skip : 0),
        limit: parseInt(req.query.limit ? req.query.limit : 50),
        order: req.query.order[0] == '-' ? [[req.query.order.slice(1), 'DESC']] : [[req.query.order, 'ASC']],
        where: where,
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
