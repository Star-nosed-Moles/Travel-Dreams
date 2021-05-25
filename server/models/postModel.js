const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// make sure the schema/model matches what you are giving the post in the router/controller
// I wasted 30 minutes trying to debug a post fetch request that was tryign to grab posts of a certain userID
// only to realize it wasn't on the schema so it wasn't storing userIDs on posts

const postSchema = new Schema({
  username: { type: String, required: true },
  location : { type: String, required: true },
  description: { type: String },
  date_created: { type: Date, require: true },
  visited: { type: Boolean },
  userID: { type: String, required: true },
  lat: { type: String },
  lng: { type: String }
});

module.exports = mongoose.model('Post', postSchema);