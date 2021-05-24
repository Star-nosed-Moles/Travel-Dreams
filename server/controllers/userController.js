const mongoose = require('mongoose');
const User = require('../models/userModel');


//creating empty obj to add method functionality to
const userController = {};

userController.create = (req, res, next) => {
  const bodyData = req.body;
  console.log(bodyData)
  User  
    .create({ username : bodyData.username, password: bodyData.password })
    .then((data) => {
      console.log('userController.create successfully returned after inserting a doc into the collection.');
      res.locals.user = data;
      return next()
    })
    .catch((err) => {
      console.log('Error in the userController.create', err) 
      return res.send(err)
    });
}

userController.get = (req, res, next) => {
  const { username } = req.query;
  // .findOne({ username: user })
  User
    .find({ username })
    .then((data) => {
      console.log(data);
      if(!data.length){
        console.log(`username: ${username} was not found in the database.`)
        return res.status(200).send({ user: data });
      }
      if(data.length){
        console.log(`username: ${username} was successfully found.`)
        res.locals.user = data[0]; // may have to modify to get specific user data
        return next();
      }
    })
    .catch(err => {
      console.log(err, userController.get);
      return res.send(err);
    });
}

userController.getAll = (req, res, next) => {
 
  User
    .find({})
    .then((data) => {
      if(!data.length){
        console.log(`No users found in the database.`)
        return res.status(200).send(`no users found in the database`)
      }
      if(data.length){
        console.log(`users found in the database`)
        return res.status(200).send(data)
      }
    })
    .catch(err => {
      console.log(err, userController.get);
      return res.send(err);
    });
}

userController.delete = (req, res, next) => {
  // User.findOneAndDelete({})
}

module.exports = userController;