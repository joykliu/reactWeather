var GreeterMessage = React.createClass({
    // NOTE: a presentational component: takes propes and renders them on to the screen
    render: function(){
        var name = this.props.name;
        var message = this.props.message;
        return(
            <div>
                <h1>hello {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    // NOTE: a presentational component: takes propes and renders them on to the screen
    onButtonClick: function(e){
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if(name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
            //name value passed into onNewName, and gets passed to handleNewName by onNewName
        }

        if(message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }
        this.props.onNewName(updates);
    },

    render: function(){
        return(
            <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name"/>
                <textarea ref="message"></textarea>
                <button>click me</button>
            </form>
        )
    }
})

var Greeter = React.createClass({
    // NOTE: A container component. maintains the state of the application, and when the state gets update it updates its children.
    getDefaultProps: function() {// native react thing, it's an anonymous function
        return {
            name: 'React',
            message: 'This is the default message'
        };// default props only work if no attribute component is present
        // this whole thing looks super similar to handlebar.js
    }, // will render default prop IF no prop called name is specified. Will render prop called name if it is specified
    getInitialState: function(){
        return {
            name: this.props.name,
            message: this.props.message
        };
    },
    handleNewName: function(updates){//function to be passed on in greeterForm
        this.setState(updates); // updates has been defined already so no need to pass on new object here
    },// every funciton inside the component is seperated by a comma
    render: function() { // defining the render method property as anonymous function that doesn't take in any arguments
        var name = this.state.name;//accessting name defined n getInitalState
        var message = this.state.message; // defines an variable that contains the value of the component's name prop value
        return ( // when we return jsx, we can only return ONE ROOT element.
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName}/>
                {/* calls handleNewName in onNewName. onNewName gets
                called in GreeterForm */}
            </div>
        );// () are not required syntax thing. It just helps organize the code
    }
});// the variable greeter serves as a component that has a function that renders the h1 heading on screen

var firstName = 'Joy'; // defines variable to use insite curly brackets
// var myMessage = 'got a message for you all';
var myMessage = 'i got a message for you';

ReactDOM.render( // calling reactdom.reder, most common react DOM method
    <Greeter name={firstName} message={myMessage}/>, // renders the component to run, use the tag name created up there. passing a name attribute to serve as a prop
    document.getElementById('app')// passing in element id aka location to reder the first argument
);



/****** NOTE: First props get defined. it either runs based on the value passed in
****** or falls back to default
****** getInitalState sets the name state to the prop's name value
****** in render funciton this.state.name fetches the name's value
****** RETURNS the name's value to display in <h1>
****** when user submits form
****** this.setState re-renders part of the component defined in .setState */
