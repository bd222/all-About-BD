const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
    {
       title:{
        type:String, 
        require:true, 
        maxLen:50,
       }, 
       description:{
        type:String, 
        require:true, 
        maxLen:150,
       }, 

    },{timestamps:true} //it will show when create and when update.
)

module.exports = mongoose.model("Todo", todoSchema)