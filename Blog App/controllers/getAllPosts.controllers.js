const Post = require('../models/post.model')
const Like = require('../models/like.model')
exports.getAllPost = async(req, res)=>{
    try {
        const getAllPost = await Post.find()
        .populate("like comment").exec()

        res.status(200).json({
            success:true, 
            AllPostInfo:getAllPost, 
            message:`Here is your all Posts..`
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false, 
            message:`There are some problem while getting all Post`
        })
    }
}