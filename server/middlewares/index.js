'use strict'


const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const modules = {};

fs
.readdirSync(__dirname)
.filter(file => {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(file => {
  const moduleName = file.slice(0,-3)
  modules[moduleName] = require('./'+ moduleName)
});
module.exports = modules;

//check rules:
//https://express-validator.github.io/docs/validation-chain-api.html
//https://github.com/chriso/validator.js

// const videos = require('./videos')
// const video = require('./video')

// module.exports = {
//   videos,
//   video,
// }

