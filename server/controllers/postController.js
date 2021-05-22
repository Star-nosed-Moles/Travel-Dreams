const Post = require('../models/postModel');

const postController = {};

postController.getPosts = (req, res, next) => {
    const { userID } = req.body;

    Post
      .find({ userID: userID })
      .then((data) => {
        console.log('postController.getPosts successfully returned after inserting a doc into the collection.');
        res.locals.posts = data;
        return next();
      })
      .catch((err) => {
        console.log('Error in the postController.getPosts', err);
        res.send(err);
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