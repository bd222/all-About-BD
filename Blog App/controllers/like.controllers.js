const Post = require('../models/post.model')
const Like = require('../models/like.model')


exports.likePost = async(req, res)=>{
    try {
        const {user, post} = req.body
        const addLike = await Like.create(
            {
                user:user, 
                post:post
            }
        )

        //jehetu ekta like poregelo amar post ta te tai oi post ta tho updated hobe naki>
        const updatePost = await Post.findByIdAndUpdate(
            post, {$push:{like:addLike._id}}, {
                timestamps:true
            }
        ).populate("like comment").exec()

        res.status(200).json({
            success:true, 
            post:updatePost, 
            message:"You are successfully liked this post."
        })
    } catch (error) {
        res.status(401).json({
            success:false, 
            message:"There are some issue while you like the post!!"
        });
    }
}


//Unlike the Post.
exports.unlikePost = async(req, res)=>{
    try {
        const {like, post} = req.body

        const unlike = await Like.findByIdAndDelete(
            {
              post:post, 
              _id:like
            }
        )
        const updatedPost  = await Post.findByIdAndUpdate(post,
        {$pull:{like:unlike._id}} ,{timestamps:true}
        );

        res.json({
            success:true, 
            post:updatedPost, 
            message:"Unlike the post Successfully."
        })
    } catch (error) {
        res.status(400).json({
            error:"EROOR WHILE UNLIKEING POST!",
        });
    }
}