'use strict'

const { validationResult } = require('express-validator/check')

const Model = require('../models').nutrition


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
        // include: [Nutritions.associations.doses, Nutritions.associations.medicinal_ingredients],

      })
      .then(results => res.status(201).send(results))
       .catch(error => res.status(400).send(error))
  },

  retrieve(req, res) {

    let tindex = 0
    let imageId = ""
    let imageUrl = ""
    const imageBaseUrl = "https://sst-oss.oss-cn-shanghai.aliyuncs.com/wp-content/uploads/2019/06/"
    const imageExe = ".png"
    if (req.query.tindex){
       tindex = (req.query.tindex + 3) % 7
       if(tindex == 9){
         tindex = tindex - 3
       }
    }

    return Model
      .findAndCountAll({
        // include: [Nutritions.associations.doses, Nutritions.associations.medicinal_ingredients],
        offset: parseInt(req.query.tindex ? tindex : 0),
        limit: 1
        // limit: parseInt(req.query.limit ? req.query.limit : 50),
        // order: [
        //   req.query.order ? req.query.order : ['updatedAt', 'ASC']
        // ],
        // where: where
      })
      .then((results) => {
        if (results.count == 0) {
          return res.status(404).send({
            message: 'Result Not Found',
          })
        }
        if (!results) {
          return res.status(404).send({
            message: 'Result Not Found',
          })
        }
        // console.log("results : " + results.rows[0].data)
        imageId = results.rows[0].id
        // console.log("imageId: " +imageId)
        imageUrl = imageBaseUrl + imageId + imageExe
        // console.log("imageUrl: " + imageUrl)
        results.rows[0].dataValues["imageUrl"] = imageUrl
        return res.status(200).send(results)
      })
      .catch((error) => res.status(400).send(error))

  }
}