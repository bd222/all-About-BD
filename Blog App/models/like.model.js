const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema(
    {
        user:{
            type:String, 
            require:true,
        }, 
        post:{
            type:mongoose.Schema.ObjectId, 
            ref:"Post"
        },
    }, {
        timestamps:true
    }
);
module.exports = mongoose.model("Like", likeSchema)