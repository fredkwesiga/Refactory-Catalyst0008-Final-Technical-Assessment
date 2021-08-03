//requiring dependecies
const express = require('express');
const path = require('path')
const mongoose = require('mongoose');

//instantiate
const app = express()



// mongodb connection
mongoose.connect('mongodb://localhost:27017/testing', {useNewUrlParser: true, useUnifiedTopology: true});


//Middlware
//adding body parser middleware that handles reading data from the <form> element.
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")));

//settings or configurations
app.set('views', './views'); 
app.set('view engine', 'pug');

//exporting routes
const indexRoutes = require('./routes/indexRoutes')


//routes to dispplay pug file
app.use('/', indexRoutes);


//handle non exisiting routes
app.get('*', (req, res) => { 
  res.send('404! This is an invalid URL.');
})

//server...creating server
app.listen(3000, function() {
  console.log('listening on 3000')
})