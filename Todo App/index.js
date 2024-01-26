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
