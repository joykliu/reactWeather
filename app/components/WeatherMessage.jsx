var React = require('react');

var WeatherMessage = React.createClass({
    render: function() {
        var city = this.props.city;
        return (
            <p>the weather in <span>{city}</span> is pretty good</p>
        );
    }
})

module.exports = WeatherMessage;
