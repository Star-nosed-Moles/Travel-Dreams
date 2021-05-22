// import express
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// express instance
const app = express();

const PORT = 3000;

// provides a connect/express middleware that can be used to enable cors w/ various options 
app.use(cors());
// handle parsing request body
app.use(express.json());
// Automatically parses urlencoded body content from incoming requests and place it in req.body
app.use(express.urlencoded({ extended: true }));

// require models
const Post = require('./models/postModel');

// require controllers
const postController = require('./controllers/postController');

// require routers
const postRouter = require('./routers/postRouter');

// Route handlers
app.use('/post', postRouter);



// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});



// ERROR HANDLERS
// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => {
  res.sendStatus(404);
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(error.stack);
    res.status(500).send('Internal Server Error!')
});


// express listen
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`); 
});