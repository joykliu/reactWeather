 const React = require('react');
 const WeatherForm = require('WeatherForm');
 const WeatherMessage = require('WeatherMessage');
 const openWeatherMap = require('openWeatherMap');
 const ErrorModal = require('ErrorModal');

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
        this.setState({
            isLoading: true,
            // clearing out existing error messages
            errorMessage: undefined
        });
        // case of success API call, temp comes back
        openWeatherMap.getTemp(city).then(function(temp){
            that.setState({
                city,
                temp,
                // sucess api call set `isLoading` back to false
                isLoading: false
            });
        }, function(e) {
            // calls fails and triggers erro, set error message
            that.setState({
                isLoading: false,
                /* .message is a JS property that
                ** lives in a default JS object, e*/
                errorMessage: e.message
            });
        })
    },
    render: function() {
        var {isLoading, temp, city, errorMessage} = this.state;

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
        function renderError() {
            if(typeof errorMessage === 'string') {
                return(
                    // the content of the error message
                    <ErrorModal/>
                )
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
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;
