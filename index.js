var bodyParser = require('body-parser')
var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')
var cors = require('cors')

var index = require('./routes/index')
var users= require('./routes/users')
var PORT = 3000

var app = express()
app.use (cors())
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use('/users',users)

app.get('/', index.get)

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
