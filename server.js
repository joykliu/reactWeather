const express = require('express');

// Creat our app
// calling thie express library
const app = express();

// use process.env to access environment variables
// when in local, use 3000
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    // check if traffic is through http(s)
    if (req.headers['x-forwarded-prop'] = 'http'/* or https if https environment */) {
        // traffic is through http(s)
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
})

// express static sepcify a foldername
app.use(express.static('public'));

//.listen takes two arguments, one is the port, the other one is a funciton
app.listen(3000, function(){
    console.log('express server is up on port' + port + '!')
});

// =====> WEB SERVER IS ESSENTIAL TO RUN REACT
