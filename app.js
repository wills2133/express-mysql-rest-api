var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')
const runMiddleware = require('run-middleware');
var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
runMiddleware(app)

// Express Validator
const expressValidator = require('express-validator')
app.use(expressValidator())

// Require routes into the application.
// require('./server/routes/batch')(app) // order is important for path matching
require('./server/routes/video')(app) // match /v1/api/batch then /v1/api/:model

// for influx server
require('./influx/routes/route')(app)

module.exports = app;
