const express = require('express')
const router = express.Router();
const postController = require('../controllers/postController');

// may need to add a userID filter
// get all posts from user
// pass in username on body (can refactor to userID)
// app.use('/post', postRouter); in server.js

router.get('/',
  postController.getUserPosts,
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
      return res.status(200).send({ post: res.locals.newPost })
  })

// get specific post (for the card page)
router.get('/:postID',
  postController.displayPost,
  (req, res) => {
      const { thisPost } = res.locals;
      console.log('postRouter: display post', thisPost);
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