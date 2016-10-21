 const React = require('react');
 const WeatherForm = require('WeatherForm');
 const WeatherMessage = require('WeatherMessage');
 const openWeatherMap = require('openWeatherMap');
 const ErrorModal = require('ErrorModal');

 const Weather = React.createClass({
    getInitialState: function() {
        return {
            /* NOTE: setting an 'isLoading' detector
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

        /* maintaining a state for if it's loading
        ** and for error message in order to conditionally
        ** load loading texts and error message later
        */
        this.setState({
            isLoading: true,
            // clearing out existing error messages
            errorMessage: undefined
        });
        // case of success API call, temp comes back
        openWeatherMap.getTemp(city).then(function(temp){
            that.setState ({
                // no updating error message when success
                city,
                temp,
                // sucess api call set `isLoading` back to false
                isLoading: false,
                errorMessage: undefined
            });
        }, function(e) {
            /* calls fails and triggers error message to show
            ** and set error message to default event error msg */
            that.setState({
                isLoading: false,
                /* when error, system returns a JS error object
                ** .message is a property within that obeject that
                ** contains a system eoor message */
                errorMessage: e.message
            });
        })
    },
    render: function() {
        // pulling out the current state of props
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
        };
        // conditionally rendet the error modal
        function renderError() {
            /* return errormodal if a string exists
            ** for the error messahe */
            if(typeof errorMessage === 'string') {
                return(
                    <ErrorModal message={errorMessage}/>
                )
            }
        }
        return (
            <div>
                <h1 className="text-center page-title">Get Weather!</h1>
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
