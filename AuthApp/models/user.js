const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name:{
            type:String, 
            require:true
        },
        email:{
            type:String, 
            require:true
        }, 
        password:{
            type:String, 
            require:true
        }, 
        role:{
            type:String, 
            enum:["Admin", "Student", "Visiter"]
        }
    }
);

module.exports = mongoose.model("User", userSchema)