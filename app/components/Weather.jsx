 var React = require('react');
 var WeatherForm = require('WeatherForm');
 var WeatherMessage = require('WeatherMessage');
 var openWeatherMap = require('openWeatherMap');

 var Weather = React.createClass({
    getInitialState: function() {
        return {
            city: 'toronto',
            temp: 15
        }
    },
    handleSearch: function(city) {

        /* give `this` to a variable
        ** othewise in .setState this would refer to handleSeach
        */
        var that = this;
        // case of success API call, temp comes back
        openWeatherMap.getTemp(city).then(function(temp){
            that.setState({
                city: city,
                temp: temp
            });
        }, function(errorMessage) {
            alert(errorMessage)
        })
    },
    render: function() {
        var {temp, city} = this.state;

        return (
            <div>
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage city={city} temp={temp}/>
            </div>
        )
    }
});

module.exports = Weather;
