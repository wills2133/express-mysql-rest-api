'use strict'
const axios = require('axios')
const baseUrl = 'https://chatflow.kitt.ai/users/5d2d05a441adc80100036b8b/apps/03ccb6202742264e129a.0f68fe723d13/api/chatbot?token=atFYslYw4aednBSEzY'
module.exports = {
  retrieve(req, res) {
    if (!req.query.q) {
      return res.status(200).json({ message:'url parameter q is necessary' })
    }
    return axios.get(baseUrl + '&q=' + encodeURI(req.query.q))
    .then( (response) => {
      return res.status(200).send( response.data )
    })
    .catch( (error) => {
      return res.status(400).send( error )
    });
  },
}
