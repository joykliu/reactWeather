const express = require('express');

// Creat our app
// calling thie express library
const app = express();

/*
** use process.env to access environment variables using the
** process.env object
** when in local, use 3000
*/
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
    // check if traffic is through http(s)
    if (req.headers['x-forwarded-proto'] === 'http'/* or https if https environment */) {
        next();
    } else {
        /*
        ** redirect traffic to the http(s) versigon of the url by
        ** concatinating the http(s) protocal,
        ** request's host name and requests url
        */
        res.redirect('http://' + req.hostname + req.url);
    }
})

// express static sepcify a foldername
app.use(express.static('public'));

//.listen takes two arguments, one is the port, the other one is a function
app.listen(PORT, function(){
    console.log('express server is up on port' + PORT + '!')
});

// =====> WEB SERVER IS ESSENTIAL TO RUN REACT
