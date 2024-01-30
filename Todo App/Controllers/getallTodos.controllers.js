const Todo = require('../models/todo.model')

exports.getAllTodos = async(req, res)=>{
    try {
      const getAllTodo = await Todo.find()
      return res.status(200).json({
        success:true, 
        AllTodoInfo:getAllTodo, 
        message:"All todos are getting Successfully.."
      })
    } catch (error) {
        console.log(error)
        console.error(error)
        res.status(500).json({
            success:false, 
            message:"There are some issue while Fetch all Todos."
        })
    }
}

//get Only One Todo.
exports.getOneTodo = async(req, res)=>{
    try {
        const id = req.params.id
        const getOneTodo =await Todo.findById({_id:id})
        if(!getOneTodo){
            return res.status(402).json({
                success:false, 
                message:`This ${id} i'd is Invaild please Provide a valid I'd!!!!`,
                message:"The particular Todo is not Find!!"
            })
        }

        return res.status(200).json({
            success:true, 
            TodoInfo:getOneTodo, 
            message:"The todo is find Successfully!!"
        })
    } catch (err) {
        console.error(err)
        console.log(err)
        return res.status(500).json({
            success:false, 
            message:"There are some issue while get one todo!!"
        })
    }
}