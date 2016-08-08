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
  .catch (function(error) {
    console.log(error)
  })
})

router.delete('/:id', function (req,res) {
  var id= req.params.id
  knex('users')
    .where({id:id})
    .del()
    .then(function(data) {
      console.log(data)
      res.status(200).send ('user deleted')
    })
    .catch(function(error){
      console.log(error)
    })
})

router.put('/:id', function (req, res) {
  var id= req.params.id
  knex('users')
    .where({id:id})
    .update({name:'wombat'})
    .then(function(data) {
      res.status(204).send()
    })
    .catch(function (error) {
      console.log(error)
    })
  })

router.post('/', function (req,res) {
  knex('users')
    .insert({name:'Erwin',email:'ejhessing@gmail.com'})
    .then(function(data) {
      res.status(201).render("index",{data:data})
    })
    .catch(function (error) {
      console.log (error)
    })
  })

router.get('/', function (req,res) {
  var name = req.query.id
  knex('users')
  .where('name', 'like','%'+name+'%')
  .then(function(data)  {
    res.status(201).json(data)
  })
  .catch(function (error) {
    console.log(error)
  })
})




module.exports = router
