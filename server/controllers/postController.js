const mongoose = require('mongoose');
const Post = require('../models/postModel');
const nodegeocoder = require('node-geocoder');
const options = {
    provider: 'google',
    api_key: 'AIzaSyARZ6DOsIps1oAQDL4QfZj7dENtlJAsokk'
  };
const geocoder = nodegeocoder(options);



const postController = {};

postController.getUserPosts = (req, res, next) => {
  const { username } = req.query;
  console.log('getting all posts by user', username)
    Post
      .find({ username })
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
  console.log(req.body.location)
  geocoder.geocode(req.body.location)
    .then((response) => {
        console.log('response', response);
        const { latitude, longitude } = response[0];
      
        res.locals.lat = latitude;
        res.locals.lng = longitude
    })
    .catch((err) => next('geocode fecth error',err))

  console.log('deconstructing req.body')
    const {
      userID,
      username,
      location,
      description,
      date_created,
      visited,
      
      
    } = req.body;
    
   

    Post
      .create({ userID, username, location, description, date_created, visited, lat, lng })
      .then((data) => {
        
        console.log('Post Created!');
        

        res.locals.newPost = data;
        res.locals.newPost.lng = res.locals.lng;
        res.locals.newPost.lat = res.locals.lat;
        return next();
      })
      .catch(err => {
        console.log('Error in the postController.createPost', err)
        return res.send(err)
      })
}


module.exports = postController;