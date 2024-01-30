const express = require('express')
const router = express.Router()


const { createPost } = require('../controllers/createPost.controller')
const { createComment } = require('../controllers/comment.controllers')
const { getAllPost } = require('../controllers/getAllPosts.controllers')
const { likePost, unlikePost } = require('../controllers/like.controllers')


router.post('/createPost', createPost)
router.post('/createComment', createComment)
router.get('/getAllPost', getAllPost)
router.post('/like', likePost)
router.post('/unlike', unlikePost)



module.exports = router