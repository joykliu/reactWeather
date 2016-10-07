var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
    name: 'Joy',
    location: 'Toronto'
};

var objTwo = {
    age: 26,
    ...objOne
};

console.log(objTwo);

ReactDOM.render( // calling reactdom.reder, most common react DOM method
    <h1>Boilerplate app</h1>, // renders the component to run, use the tag name created up there. passing a name attribute to serve as a prop
    document.getElementById('app')// passing in element id aka location to reder the first argument
);



/* NOTE: First props get defined. it either runs based on the value passed in
* or falls back to default
* getInitalState sets the name state to the prop's name value
* in render funciton this.state.name fetches the name's value
* RETURNS the name's value to display in <h1>
* when user submits form
* this.setState re-renders part of the component defined in .setState
*/
