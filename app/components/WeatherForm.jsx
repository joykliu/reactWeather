var React = require('react');

var WeatherForm = React.createClass({

    // when form is submitted
    onFormSubmit: function(e) {
        e.preventDefault();

        // define variable city to the user input value
        var city = this.refs.city.value;

        // if the user seraches for a city
        if (city.length > 0) {
            this.refs.city.value = '';
            /* passing in the city the user searches for
            ** set props value to user input
            ** by calling the parent search function
            ** defined in weather.jsx
            */
            this.props.onSearch(city);
        }
        //this.props.onNewCity(city)
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="city" placeholder="Enter city name"/>
                    <button>Get Weather</button>
                </form>
            </div>
        )
    }
})

module.exports = WeatherForm;
