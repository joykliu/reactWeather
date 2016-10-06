var GreeterMessage = React.createClass({
    render: function() {
        var name = this.props.name;
        var message = this.props.message;

        return {
            <div>
                <h1>Hello {name}</h1>
                <p>yo momma says: {message}</p>
            </div>
        }
    }
})

var GreaterForm = React.createClass({
    onButtonClick: function(e) {
        preventDefault(e);

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if(name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }

        if(message.lengh > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }
        this.props.onUpdate(updates)
    },

    render: function() {
        return{
            <form>
                <input type="text" refs="name"/>
                <textarea refs="message"></textarea>
                <button>click me</button>
            </form>
        }
    }
})

var Greeter = React.createClass({
    getDefaultProps: function(){
        return {
            name: 'React',
            messgae: 'React is not that hard'
        }
    },
    getInitalState: function(){
        return {
            name = this.props.name,
            message = this.props.message
        };
    },
    handleUpdates: function() {
        this.setState(updates);
    },

    render: function() {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onUpdate={this.handleUpdates}/>
            </div>
        )
    }
})

var firstName = 'Joy';
var myMessage = 'this is a message';

ReactDOM.render(
    <Greeter name={firstName} message={myMessage}/>,
    document.getElementById('app')
);
