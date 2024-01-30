# All-About-BD

# Todo App

This is a simple Todo App that allows you to manage your tasks and stay organized.

### 🧑🏽‍💻 Index.js File.

```javascript
const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT ||8000

app.listen(PORT, ()=>{
    console.log(`My App is Running ${PORT} port!`)
})

app.get('/', (req, res)=>{
    res.send(`<h1>This is my HomePage Mf<h1/>`)
})
const ConnectionWithDB = require("./config/db")
ConnectionWithDB()

app.use(express.json())
const allRoutes  = require('./router/routers')
app.use('/api/v1', allRoutes)


```
# Blog App

This is a simple Blog App that allows you to manage your Blogs and stay organized.

### 🧑🏽‍💻 db.js File.

```javascript
const mongoose = require('mongoose')
require('dotenv').config()
const dbConnnection = async(req, res)=>{
    mongoose.connect(process.env.MOGODB_URI,{
        //define some flags..
    })
    .then(()=>{
        console.log("Db connection is Successfully..")
    })
    .catch((err)=>{
        console.log(err)
        console.log("There are some issue while connection with DB!!")
        process.exit(1)
    })
}

module.exports = dbConnnection


```



