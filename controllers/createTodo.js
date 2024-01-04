const TodoModel = require("../models/TodoModel");
exports.createTodo = async(req, res) =>{
    try{
        //business logic ..
        //fetch korbo title description.
        const {
            title, 
            description
        }  = req.body;
        const createTodoEntry = await TodoModel.create({title, description});
        
        res.status(200).json({
            success:true, 
            data:createTodoEntry, 
            message:"Your Entry has been created Successfully.", 
        })
    }catch(err){
        console.error(err)
        console.log(err)
        res.status(500).json({
            success:false, 
            data:"Internal Server Error!", 
            meassage:err.meassage,

        });
    }
};