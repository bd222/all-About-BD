const Todo = require('../models/todo.model')

exports.updateTodo = async(req, res)=>{
    try {
        const id = req.params.id

        const {title, description} = req.body
        const updateOneTodo = await Todo.findByIdAndUpdate(
            {_id:id}, 
            {title, description}
        )

        if(!updateOneTodo){
            return res.status(401).json({
                success:false, 
                message:"There is no particular Todo find in this I'd!"
            })
        }

        return res.status(200).json({
            success:false,
            dataInfo:updateOneTodo, 
            message:"Todo Update Successully!"
        })
    } catch (error) {
        console.error(err)
        
        res.status(500).json({
            success:false, 
            data:"Internal Server ERROR!", 
            message:err.message,
        });
    }
}