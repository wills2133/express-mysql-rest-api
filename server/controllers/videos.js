'use strict'

const { validationResult } = require('express-validator/check')

const Models = {}
const Video = require('../models').video
Models['rating'] = require('../models').rating
Models['staffs'] = require('../models').staff

const linkCreatedIdToArray = (reqBody, childKey, insertedRows) => {
  const children = insertedRows.map( (insertedRow, index) =>
    reqBody[index][childKey].map( (res) => 
      Object.assign({ videoId: insertedRow.id }, res) )
  )
  return [].concat(...children)
}

const linkCreatedIdToObject = (reqBody, childKey, insertedRows) => {
  const children = insertedRows.map( (insertedRow, index) => 
    Object.assign( { videoId: insertedRow.id }, reqBody[index][childKey] )
  )
  return [].concat(...children)
}

module.exports = {
  create(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    return Video.sequelize.transaction( t => {
      return Video.bulkCreate(req.body, { 
          // individualHooks: true, // to return the ids of created rows
          transaction: t
      })
      .then((results) => {
        // Extract the nested objects and link to the corresponding ID of the results
        const createdPromises = []
        for (var key in req.body[0])
        {
          let linkedObjects = []
          if ( (!!req.body[0][key]) && (req.body[0][key].constructor === Array) ){
            linkedObjects = linkCreatedIdToArray(req.body, key, results)
          }
          if ( (!!req.body[0][key]) && (req.body[0][key].constructor === Object) ){
            linkedObjects = linkCreatedIdToObject(req.body, key, results)
          }
          if (linkedObjects.length > 0){
            createdPromises.push( Models[key].bulkCreate(linkedObjects, {transaction: t}) )
          }
        }
        //sync all promise until all promises complete
        return Promise.all( createdPromises )
        .then( subResults => res.status(201).send( results.concat(...subResults) ) )
        .catch(error => res.sendStatus(400).send(error))
      })
      .catch(error => res.sendStatus(400).send(error))
    })
    .then( result => { console.log("transaction done") } )
    .catch( error => { console.log("transaction error") } )

    // return Video.bulkCreate(req.body, { 
    //   individualHooks: true // to return the ids of created rows
    // })
    // .then((results) => {
    //   // Extract the nested objects and link to the corresponding ID of the results
    //   const createdPromises = []
    //   for (var key in req.body[0])
    //   {
    //     let linkedObjects = []
    //     if ( (!!req.body[0][key]) && (req.body[0][key].constructor === Array) ){
    //       linkedObjects = linkCreatedIdToArray(req.body, key, results)
    //     }
    //     if ( (!!req.body[0][key]) && (req.body[0][key].constructor === Object) ){
    //       linkedObjects = linkCreatedIdToObject(req.body, key, results)
    //     }
    //     if (linkedObjects.length > 0){
    //       createdPromises.push( Models[key].bulkCreate(linkedObjects) )
    //     }
    //   }
    //   //sync all promise until all promises complete
    //   Promise.all( createdPromises ).then( subResults => 
    //     res.status(201).send( results.concat(...subResults) )
    //   )
    // })
    // .catch(error => res.sendStatus(400).send(error))
  },
  
  retrieve(req, res) {
    return Video
      .findAndCountAll({
        offset: parseInt(req.query.offset ? req.query.offset : 0),
        limit: parseInt(req.query.limit ? req.query.limit : 50),
        where: req.query.where ? {
          $or: [
            {
              long: {
                $like: `%${req.query.where}%`
              }
            },
            {
              short: {
                $like: `%${req.query.where}%`
              }
            }
          ]
        } : undefined,
        include: [Video.associations.rating,
          Video.associations.staffs]
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
