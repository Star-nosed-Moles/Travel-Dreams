// import express
const express = require('express');
const path = require('path');

// express instance
const app = express();

// handle parsing request body
app.use(express.json());
// Automatically parses urlencoded body content from incoming requests and place it in req.body
app.use(express.urlencoded({ extended: true }));


// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});


// route handlers



// ERROR HANDLERS
app.get('/', (req, res) => {
  return res.sendFile(__dirname, '../index.html');
});

// express listen
app.listen(3000, ()=> {
    console.log('Server listening on port 3000'); 
});