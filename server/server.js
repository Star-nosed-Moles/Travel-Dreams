// import express
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// require routers
const postRouter = require('./routers/postRouter');
const userRouter = require('./routers/userRouter');

// express instance
const app = express();

const PORT = 3000;


//Mongoose DB connection
//useUnifiedTopology -> opts in to using the MongoDB driver's new connection management engine.
//useNewUrlParser -> allows for Mongo to parse the new URL formats for URI connection
mongoose.connect('mongodb+srv://soloProject:coinscoins@cluster0.ghlyl.mongodb.net/travel-dreams?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
//Mongoose.connection.once tells mongoose to stay connected to the database once it has been connected.
mongoose.connection.once('open', () =>{
  console.log('mongoose once / open connection is successful');
})

// PARSERS
// provides a connect/express middleware that can be used to enable cors w/ various options 
app.use(cors());
// handle parsing request body
app.use(express.json());
// Automatically parses urlencoded body content from incoming requests and place it in req.body
app.use(express.urlencoded({ extended: true }));


// Route handlers
app.use('/post', postRouter);
app.use('/user', userRouter);


// ng in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});


// ERROR HANDLERS
// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => {
  console.log('404');
  return res.sendStatus(404);
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).send('Internal Server Error!')
});


// express listen
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`); 
});