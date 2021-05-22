const express = require('express')
const router = express.Router();
const postController = require('../controllers/postController');

// may need to add a userID filter
router.get('/post',
  postController.getPosts,
  (req, res) => {
    // store post data in the res.locals obj
    const { postData } = res.locals;
    console.log('postRouter: get post data');
    res.status(200).json({ posts: res.locals.posts });
  }
);


// create post


// get specific post (for the card page)

module.exports = router;

    // const newPost = new Post({
    //     username,
    //     location,
    //     description,
    //     date_created,
    //     visited
    // });
    // then do newPost.save() to the database