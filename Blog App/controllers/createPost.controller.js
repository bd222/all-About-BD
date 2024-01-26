const Post = require('../models/post.model')

exports.createPost = async(req, res)=>{
    try {
        const {title, description, body} = req.body
        const newPost = await Post.create(
            {
                title:title, 
                description:description, 
                body:body
            }
        );
       

        res.status(200).json({
            success:true, 
            PostInfo:newPost, 
            message:`Post created Successfully..`
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success:false, 
            message:`There are some problem while creating Post\n
            ERROR :${err}`
        })
    }
}