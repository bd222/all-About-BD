const TodoModel = require("../models/TodoModel");
exports.deleteTodo = async(req, res) =>{
    try{
        // my logic should be find base on their id and deleted.
        const {id} = req.params;
        const deleteParticulaTodo = await TodoModel.findByIdAndDelete(id);
        res.status(200).json({
            success:true, 
            data:deleteParticulaTodo, 
            message:`You todo ${id} is deleted Successfully!`, 
        })

    }catch(err){
        console.error(err)
        console.log(err)
        res.status(500).json({
            success:false, 
            data:"Internal Server Error!", 
            meassage:"There are some issue while deleting Todo",

        });
    }
}