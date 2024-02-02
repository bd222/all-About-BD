const express = require('express')
const router = express.Router()


const { signUp, logIn } = require('../controllers/signUp_SignIn')
const { auth, isStudent, isAdmin } = require('../middleware/auth.middleware')



router.post('/signUp', signUp)
router.post('/logIn', logIn)

router.get('/test', auth, (req, res)=>{
    res.json({
        success:true, 
        message:`This the test Protcted Route.`
    })
})



router.get('/isStudent', auth, isStudent, (req, res)=>{
    res.json({
        success:true, 
        message:`This the Student Protcted Route.`
    })
})



router.get('/isAdmin', auth, isAdmin, (req, res)=>{
    res.json({
        success:true, 
        message:`This the Admin Protcted Route.`
    })
})


module.exports = router