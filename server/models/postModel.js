const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: { type: String, required: true },
    location : { type: String, required: true },
    description: { type: String },
    date_created: { type: Date, require: true },
    visited: { type: Boolean }
});

module.exports = mongoose.model('Post', postSchema);