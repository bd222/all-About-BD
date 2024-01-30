const express = require('express')
const app = express()
require('dotenv').config()
const DB_Connection = require('./config/db')
const allRouter = require('./routers/routers')



const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`My App is Listing at PORT ${PORT}`)
})

app.get('/', (req, res)=>{
    res.send(`<h1> This is My HomePage</h1>`)
})


DB_Connection()

app.use(express.json())
app.use('/api/v1', allRouter)