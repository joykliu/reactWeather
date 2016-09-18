var express = require('express');

// Creat our app
// calling thie express library
var app = express();
// express static sepcify a foldername
app.use(express.static('public'));

//.listen takes two arguments, one is the port, the other one is a funciton
app.listen(3000, function(){
    console.log('express server is up on port 3000!')
});

// =====> WEB SERVER IS ESSENTIAL TO RUN REACT
