 var React = require('react');
 var WeatherForm = require('WeatherForm');
 var WeatherMessage = require('WeatherMessage');

 var Weather = React.createClass({
    getDefaultProps: function() {
        return {
            city: 'city'
        }
    },
    getInitialState: function() {
        return {
            city: this.props.city
        }
    },
    onNewCity: function(updates) {
        this.setState(updates)
    },
    render: function() {
        var city = this.state.city

        return (
            <div>
                <h1>Get Weather</h1>
                <WeatherForm onNewCity={this.onNewCity}/>
                <WeatherMessage city={city}/>
                {/* <WeatherMessage onNewCity={this.onNewCity}/> */}
            </div>
        )
    }
});

module.exports = Weather;
