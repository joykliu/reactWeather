var React = require('react');

var WeatherMessage = React.createClass({
    render: function() {

        // pulling variables off of the props using es2015
        // var city = this.props.city;
        // var temp = this.props.temp;

        // doing the exact samething using ES6 desconstructuring

        var {temp, city} = this.props;
        return (
            <p>it is <span>{temp}</span> in  <span>{city}</span> </p>
        );
    }
})

module.exports = WeatherMessage;
