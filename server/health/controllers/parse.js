'use strict'

module.exports = {
  create(req, res) {
    return res.status(200).json( JSON.parse(req.body.str) )
  },
}


