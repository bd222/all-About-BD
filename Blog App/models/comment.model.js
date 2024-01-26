const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
    {
        user:{
            type:String, 
            require:true,
        }, 
        post:{
            type:mongoose.Schema.ObjectId, 
            ref:"Post"
        },
        body:{
            type:String,
            require:true
        }
    }, {
        timestamps:true
    }
);
module.exports = mongoose.model("Comment", CommentSchema)