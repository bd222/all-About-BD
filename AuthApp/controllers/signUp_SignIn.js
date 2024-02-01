const User = require('../models/user')
const bcrypt = require('bcrypt')


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