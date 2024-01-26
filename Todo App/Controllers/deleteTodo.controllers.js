const Todo = require('../models/todo.model')

exports.deleteTodo = async(req, res)=>{
    try {
        const id = req.params.id

        const delteItems = await Todo.findByIdAndDelete({_id:id})
        //if partuclar items is't find then then how i deleted.
        if(!delteItems){
            return res.status(500).json({
                success:false, 
                message:`There is no particular id find in this id.`
            })
        }

        return res.status(200).json({
            success:true, 
            deletedItems:delteItems, 
            message:"Items Deleted Successfully..."
        })
    } catch (error) {
        return res.status(500).json({
            success:false, 
            message:"There are some issue while Deleting Todo!"
        })
    }
}