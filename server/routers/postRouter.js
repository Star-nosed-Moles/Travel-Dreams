const express = require('express')
const router = express.Router();
const postController = require('../controllers/postController');

// may need to add a userID filter
router.get('/',
  postController.getPosts,
  (req, res) => {
    // store post data in the res.locals obj
    const { posts } = res.locals;
    console.log('postRouter: get posts');
    return res.status(200).json({ posts });
  }
);

// create post
router.post('/', 
  postController.createPost,
  (req, res) => {
      return res.status(200).send('postRouter.js - router.post createPost')
  })

// get specific post (for the card page)
router.get('/:postID',
  postController.displayPost,
  (req, res) => {
      const { thisPost } = res.locals;
      console.log('postRouter: display post');
      return res.status(200).json({ thisPost });
  }
);


module.exports = router;

    // const newPost = new Post({
    //     username,
    //     location,
    //     description,
    //     date_created,
    //     visited
    // });
    // then do newPost.save() to the database