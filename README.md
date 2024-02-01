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
# Authenticator App

This is a simple Auth App , where i get knowledge how a user login and SignIn.

### 🔐 SignUp_SignIn.js File.

```javascript

exports.signUp = async(req, res)=>{
    try {
        const {name, email, password, role} = req.body;
        const CheckUser = await User.findOne({email})
        if(CheckUser){
            return res.status(400).json({
                success:false, 
                message:`User is Already Exists!`
            })
        };
        let hashpassword;
        try {
            hashpassword = await bcrypt.hash(password, 10)
        } catch (error) {
            return res.status(500).json({
                success:false, 
                message:`There are some Problem while Hashed Password!`
            });
        };

        const newUser = await User.create(
            {
                name:name, 
                email:email, 
                password:hashpassword, 
                role:role
            }
        );

        return res.status(200).json({
            success:true, 
            userDetails:newUser,
            message:`User Created Successfully :)`
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false, 
            message:`There are some Problem While create User!`
        })
    }
}


```





