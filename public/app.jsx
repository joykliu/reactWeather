// nameing convention in react - fistletter uppercase then camel casing
var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'no message for you'
        };// default props only work if no attribute componet is present 
    }, // will render default prop IF no prop called name is specified. Will render prop called name if it is specified
    render: function() { // defining the render method as anonymous funciton that doesn't take in any arguments
        // return React.createElement(
        //     'h1',
        //     null,
        //     'Hello React.createElement!'
        // ) //instead of using JSX code, we call react.createElement which results in longer, harder to read
        var name = this.props.name;
        var message = this.props.message; // defines an variable that contains the value of the component's name prop value
        return ( // when we return jsx, we can only return ONE ROOT element.
            <div>
                <h1>hello {name}</h1>
                <p>{message + '!!'}</p>
            </div>
        );// () are not required syntax thing. It just helps organize the code
    }
});// the variable greeter serves as a component that has a function that renders the h1 heading on screen

var firstName = 'Joy'; // defines variable to use insite curly brackets
// var myMessage = 'got a message for you all';

ReactDOM.render( // calling reactdom.reder
    <Greeter name={firstName} />, // renders the component to run, use the tag name created up there. passing a name attribute to serve as a prop
    document.getElementById('app')// passing in element id aka location to reder the first argument
);
