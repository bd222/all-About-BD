const Todo = require('../models/todo.model')

exports.createTodo = async(req, res)=>{
    try {
        const {
            title, 
            description
        } = req.body

        const newCreatedTodo = await Todo.create({title, description})
        res.status(200).json({
            success:true, 
            TodoInfo:newCreatedTodo, 
            message:"Todo Created Successfully."
        })
    } catch (error) {
        console.log(error)
        console.error(error)
        res.status(502).json({
            success:false,
            message:"There are some issue while creating Todo"
        })
    }
}