'use strict';

// Setup Node Server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

app.get('/new',(request, response) => {
  response.sendFile('new.html', {root: './public'});
});

app.use((request, response) => {
  response.status(404).send('404 error! File Not Found!');
});

app.listen(3000, () => console.log('Listening on port 3000...'));

