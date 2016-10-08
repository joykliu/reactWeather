var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Nav = require('Nav');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// works the same as below, this is ES6 object destructuring

//var Route = require('react-router').Route


ReactDOM.render( // calling reactdom.reder, most common react DOM method
    <Router history={hashHistory}>
        <Route path="/" component={Main}>

        </Route>
    </Router>, // renders the component to run, use the tag name created up there. passing a name attribute to serve as a prop
    document.getElementById('app')// passing in element id aka location to reder the first argument
);
