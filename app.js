var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Express Validator
const expressValidator = require('express-validator')
app.use(expressValidator())

// Require routes into the application.
require('./server/routes/video')(app)

module.exports = app;
