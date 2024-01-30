const mongoose = require('mongoose')
require('dotenv').config()
const dbConnection = ()=>{
    mongoose.connect(process.env.MONGODB_URI, {
        //define some flags.

    })
    .then(()=>{
        console.log(`DB Connection Successfully..`)
    })
    .catch((err)=>{
        console.log(err)
        console.log(`The are Some Problem While Connection with DB!!!`)
    })
}

module.exports = dbConnection