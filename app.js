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
require('./server/batch/routes/batch')(app)
require('./server/chatbot/routes/index')(app)
require('./server/health/routes/index')(app)
// require('./server/video/routes/video')(app)
// require('./server/sleep/routes/index')(app)

// for influx server
require('./influx/routes/index')(app)

module.exports = app;
