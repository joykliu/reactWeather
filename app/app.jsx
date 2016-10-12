// LOADING REACT
var React = require('react');
var ReactDOM = require('react-dom');

// LOADING MORE REACT COMPONENTS USING ES6 destructuring
// works the same as below, this is ES6 object destructuring
//var Route = require('react-router').Route
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//LOADING COMPONENTS BY CALLING ALIASES
var Main = require('Main');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render( // calling reactdom.reder, most common react DOM method
    <Router history={hashHistory}>
    {/*Uses history prop with a `hashHistory` to use the `#/` combination to maintain the routes for the app`*/}
        <Route path="/" component={Main}>
        {/*calling Main component so Main renders the weather component and the navigation*/}
        {/*Path finds `/` in the url
            addes `active` class to component */}
            <Route path="about"  component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>
            {/*When using `IndexRoute`
                use `IndexLink` instead of `Link`*/}
        </Route>
    </Router>, // renders the component to run, use the tag name created up there. passing a name attribute to serve as a prop
    document.getElementById('app')// passing in element id aka location to reder the first argument
);
