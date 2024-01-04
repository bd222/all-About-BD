const TodoModel = require("../models/TodoModel");

exports.getAllTodoSchema = async (req, res) => {
    try {
        const allTodos = await TodoModel.find({});
        res.status(200).json({
            success: true,
            data: allTodos,
            message: "Here is your all Todos."
        });
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false, 
            data:"Internal Server Error!", 
            message:err.message,
        })
    }
};






//I have to get only one Todo.
//how i get that todo. base on their _id.
exports.getOneTodo = async(req, res) =>{
    try{
        //as i am finding base on id so i fetch id.
        const id = req.params.id;
        const getoneTodo = await TodoModel.findById({_id: id})
        if(!getoneTodo){
            return res.status(400).json({
                success:false,
                message:"The Particular Todo not found!" , 
            });
        }
        //data found.
        return res.status(200).json({
            success:true, 
            data:getoneTodo, 
            message:`Todo ${id} has been Successfully Found.`, 
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
}
