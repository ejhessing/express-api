var express = require('express')
var router = express.Router()
var development = require('../knexfile').development
var knex = require('knex')(development)

router.get('/', function (req,res) {
  knex('users')
  .select()
  .then (function(data) {
    res.status(200).json ({users:data})
  })

})

module.exports = router
