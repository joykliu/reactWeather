var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
    render: function() {
        return (// only can return on root element at once - use a div tag
            <div>
                <Nav/>
                <h2>Main Component</h2>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;
