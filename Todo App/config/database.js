const mongoose = require("mongoose");
require("dotenv").config();
const dbConnection = () =>{
    mongoose.connect(process.env.MONGODB_URL, {
        //flag ke define korte hobe..
    })
    .then(()=>{
        console.log("DB connection successfully!!");
    })
    .catch((err)=>{
        console.error(err);
        console.log("There are some issue while connection with DB!!");
        process.exit(1);
    })
};
module.exports = dbConnection;