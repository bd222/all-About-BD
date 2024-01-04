const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`My app is listing at port number ${PORT}`)
})

app.get('/', (req, res) =>{
    res.send(`<h1>This is my Homepage!</h1>`)
})
//use here a body parser.
app.use(express.json());

//import the dbconnection.
const dbConnect = require("./config/database");
dbConnect(); //call dbconnect.

//import my routers.
const allRouters = require("./routers/allRoutes");
app.use('/api/v1', allRouters); //this process is call moute.

