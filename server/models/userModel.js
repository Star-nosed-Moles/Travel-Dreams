//Mongoose instance
const mongoose = require('mongoose');

//User schema for Mongoose DB
const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true },
  password: {type: String, required: true}
})

//var declaration of Users Collectoin and model for module export
const User = mongoose.model('User', userSchema);
module.exports = User;