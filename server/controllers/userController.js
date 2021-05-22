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
      return next()
    })
    .catch((err) => {
      console.log('Error in the userController.create', err) 
      return res.send(err)
    });
}

userController.get = (req, res, next) => {
  const user = req.body.username;
  // .findOne({ username: user })
  User
    .find({ username: user })
    .then((data) => {
      if(!data.length){
        console.log(`username: ${user} was not found in the database.`)
        return res.status(200).send(`username: ${user} was not found in the database.`)
      }
      if(data.length){
        console.log(`username: ${user} was successfully found.`)
        res.locals.user = data; // may have to modify to get specific user data
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