const mongoose = require('mongoose')
require('dotenv').config()

const connectDb = async(req, res) =>{
    mongoose.connect(process.env.MONGODB_URI, {
        //define some flags..
    })
    .then(()=>{
        console.log("Db Connection Successfully!")
    })
    .catch((err)=>{
        console.log(err)
        console.log("There are some issue while connect with DB.")
        process.exit(1)
    })
}
module.exports = connectDb