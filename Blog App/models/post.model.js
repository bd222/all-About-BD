const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        title:{
            type:String, 
            require:true
        }, 
        description:{
            type:String, 
            require:true,
        },
        body:{
            type:String, 
            require:true,
        } ,
        like:[
            {
                type:mongoose.Schema.ObjectId,
                ref:"Like"
            }
        ],
        comment:[
            {
                type:mongoose.Schema.ObjectId,
                ref:"Comment"
            }
        ],

    }, {timestamps:true}
);

module.exports = mongoose.model("Post", postSchema)