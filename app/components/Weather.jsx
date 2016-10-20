 const React = require('react');
 const WeatherForm = require('WeatherForm');
 const WeatherMessage = require('WeatherMessage');
 const openWeatherMap = require('openWeatherMap');

 const Weather = React.createClass({
    getInitialState: function() {
        return {

            /* setting an 'isLoading' detector
            ** to detect if user performs a search
            ** initial state is set to false
            ** when search perfroms `isLoading` becomes true
            ** after search completes it sets back to false
            */
            isLoading: false
        }
    },
    handleSearch: function(city) {

        /* give `this` to a variable
        ** othewise in .setState this would refer to handleSeach
        */
        var that = this;

        // debugger;
        // when search performs `isLoading` equals to true
        this.setState({isLoading: true});
        // case of success API call, temp comes back
        openWeatherMap.getTemp(city).then(function(temp){
            that.setState({
                city,
                temp,
                // sucess api call set `isLoading` back to false
                isLoading: false
            });
        }, function(errorMessage) {
            that.setState({
                isLoading: false
            });
            alert(errorMessage)
        })
    },
    render: function() {
        var {isLoading, temp, city} = this.state;

        /*
        ** to conditionally load either the weather message
        ** or the loading message by nesting a function within
        ** the render function of a component
        */

        function renderMessage() {
            if(isLoading) {
                // when is loading gives out a loading message
                return <h3 className="text-center">Fetching weather.....</h3>;
            }else if(temp && city) {
                return <WeatherMessage temp={temp} city={city}/>;
            }
        }
        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {/*
                    calling render function here to spit out
                    weather message conditionally
                */}
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;
