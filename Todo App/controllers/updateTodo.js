const TodoModel = require("../models/TodoModel");

exports.upDateTodo  = async(req, res) =>{
    try{
        //update korbo amar id basic a.
        const {id} = req.params;
        
        //ki ki update korb 1 hoya6e amat "title" 2."description"
        const {title, description} = req.body;
        const changeTodo = await TodoModel.findByIdAndUpdate(
            {_id:id}, 
            {title, description, updateAt:Date.now()}, //ay line ta te upadte hoyajabe db te.

        )
        //update j hoya6e tar req pathabo.
        res.status(201).json({
            success:true,
            data:changeTodo, 
            meassage:"Todo Upadate Successfully..",  
        })

    }catch(err){
        console.error(err)
        
        res.status(500).json({
            success:false, 
            data:"Internal Server ERROR!", 
            message:err.message,
        });
    }
}