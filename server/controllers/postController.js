const mongoose = require('mongoose');
const Post = require('../models/postModel');

const postController = {};

postController.getPosts = (req, res, next) => {
    const { userID } = req.body;
    console.log('in getPosts controller!');
    Post
      .find({ userID })
      .then((data) => {
        console.log('postController.getPosts successfully returned after inserting a doc into the collection.');
        console.log('data in getPosts', data);
        res.locals.posts = data;
        return next();
      })
      .catch((err) => {
        console.log('Error in the postController.getPosts', err);
        return res.send(err);
      })

}

postController.displayPost = (req, res, next) => {
    // const { thisPost } = req.body;
    const postID = req.params.postID;
    // console.log('req.params', req.params);

    console.log('in displayPost controller!');
  Post
    .findOne({ _id: postID })
    .then((post) => {
      // console.log('postController.displayPost successfully returned post')
      console.log(post);
      res.locals.thisPost = post;
      return next();
    })
    .catch((err) => {
      console.log('Error in the postController.displayPost', err);
      return res.send(err);
    })
}

postController.createPost = (req, res, next) => {
    const {
      userID,
      username,
      location,
      description,
      date_created,
      visited
    } = req.body;

    Post
      .create({ userID, username, location, description, date_created, visited })
      .then((data) => {
        console.log('Post Created!');
        res.locals.newPost = data;
        return next();
      })
      .catch(err => {
        console.log('Error in the postController.createPost', err)
        return res.send(err)
      })
}


module.exports = postController;