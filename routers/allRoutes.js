const express = require("express");
const router = express.Router();

//Import controllers..
const { createTodo } = require("../controllers/createTodo");
const { getAllTodoSchema, getOneTodo} = require("../controllers/getAllTodos");
const { deleteTodo } = require("../controllers/deleteTodo");
const { upDateTodo } = require("../controllers/updateTodo");




//define my all api's..
router.post('/createTodo', createTodo);
router.get('/getAllTodos', getAllTodoSchema);
router.get('/getTodo/:id',getOneTodo );
router.delete('/deleteTodo/:id', deleteTodo );
router.put("/updateTodo/:id", upDateTodo);




module.exports = router; 