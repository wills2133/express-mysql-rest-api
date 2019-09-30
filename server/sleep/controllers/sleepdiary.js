'use strict'

const { validationResult } = require('express-validator/check')

const Model = require('../models').sleepdiary


module.exports = {
  create(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    return Model
    .create(req.body,
      {
        useMaster : true,

      })
      .then(results => res.status(201).send(results))
       .catch(error => res.sendStatus(400).send(error))
  },

  retrieve(req, res) {

    let where = {}
    if (req.query.where){
        const jsonWhere = JSON.parse(req.query.where)
        Object.keys( jsonWhere ).forEach(function(key){

            if ( jsonWhere[key] != "") {
              where[key] = { $like: '%' + jsonWhere[key] + '%' }
            }
        })
    }
    else {
        where = undefined
    }

    return Model
      .findAndCountAll({
        offset: parseInt(req.query.offset ? req.query.offset : 0),
        limit: parseInt(req.query.limit ? req.query.limit : 50),
        order: [
          req.query.order ? req.query.order : ['updatedAt', 'ASC']
        ],
        where: where
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
