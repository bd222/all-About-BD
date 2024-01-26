const express = require('express')
const router = express.Router()

const { createTodo } = require('../Controllers/createTodo.controller')
const { getAllTodos, getOneTodo } = require('../Controllers/getallTodos.controllers')
const { deleteTodo } = require('../Controllers/deleteTodo.controllers')
const { updateTodo } = require('../Controllers/updated.controllers')





router.post('/createTodo' , createTodo)
router.get('/getAllTodos' , getAllTodos)
router.get('/getoneTodo/:id' , getOneTodo)
router.delete('/deleteTodo/:id', deleteTodo)
router.put('/updateTodo/:id', updateTodo )




module.exports = router