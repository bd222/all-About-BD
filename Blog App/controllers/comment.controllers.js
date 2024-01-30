const Comment = require('../models/comment.model')
const Post = require('../models/post.model')

exports.createComment = async(req, res)=>{
    try {
        const {user,post,body} = req.body //post menas : Post particular I'd

        const craeateComment = await Comment.create({
            user:user, 
            body:body, 
            post:post
        })
        //As we comment a post so what we have to do , we just have to update my 
        //post coz a new user comment on that for that reason i just update my previous post.

        const updatePost = await Post.findByIdAndUpdate(post, 
            {$push:{comment:craeateComment._id}}, {timestamps:true})
        .populate("comment").exec()

        res.status(200).json({
            success:true, 
            PostInfo:updatePost,
            message:"Comment Successfully.."
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            success:false, 
            message:'There are some problem while create Comment..'
        })
    }
}