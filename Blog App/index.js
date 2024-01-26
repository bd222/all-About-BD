const express = require('express')
const ConnectDB = require('./config/db')
const allroutes = require('./routers/routers')
const app = express()


app.listen(3000,()=>{
    console.log(`My app is listing at 3000 port!`)
})

app.get('/', (req, res)=>{
    res.send(`<h1>This is My Homepage<h1/>`)
})

ConnectDB() //call the db Connection.


//middleware.
app.use(express.json())


//moute all api's
app.use('/api/v1' , allroutes)