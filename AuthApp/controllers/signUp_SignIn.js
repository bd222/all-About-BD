const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()


exports.signUp = async(req, res)=>{
    try {
        const {name, email, password, role} = req.body;
        const user = await User.findOne({email})
        if(user){
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




//LogIn.
exports.logIn = async(req, res)=>{
    try {
        const {email, password} = req.body
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success:false, 
                message:`Go and Resgester then You Log In!!`
            })
        };

        if(bcrypt.compare(password, user.password)){
            //jodi password match kore jai.
            //token generate korbo.
            //For generating Token need 3 things first is Payload , JWT_SCRECT_KEY
            //Create payload .
            const payload = {
                email:user.email, 
                id: user._id, 
                role:user.role
            }
            let token = jwt.sign(payload,process.env.JWT_SECRECT_KEY, {
                expiresIn:"2h"
            })
            user = user.toObject()
            user.token = token //token ta k cookie vetor add korar jonno.
            user.password = undefined

            const option = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), 
                httpOnly:true, 
            }

            //now cookie maddhame res send korbo.
            res.cookie("Cookie", token, option).status(200).json({
                success:true, 
                token, 
                user, 
                message:`User logIn Successfully.`
            })

        }else{
            //Password Not Match.
            return res.status(403).json({
                success:false,
                message:"Password Incorrect!",
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Login Failure",
        });
    }
}