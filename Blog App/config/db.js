const mongoose = require('mongoose')
require('dotenv').config()
const dbConnnection = async(req, res)=>{
    mongoose.connect(process.env.MOGODB_URI,{
        //define some flags..
    })
    .then(()=>{
        console.log("Db connection is Successfuly..")
    })
    .catch((err)=>{
        console.log(err)
        console.log("There are some issue while connection with DB!!")
        process.exit(1)
    })
}

module.exports = dbConnnection