var React = require('react');

var WeatherForm = React.createClass({

    // when form is submitted
    onFormSubmit: function(e) {
        e.preventDefault();

        // define variable location to the user input value
        var city = this.refs.city.value;

        // if the user seraches for a location
        if (city.length > 0) {
            this.refs.city.value = '';
            /* passing in the location the user searches for
            ** set props value to user input
            ** by calling the parent search function
            ** defined in weather.jsx
            */
            this.props.onSearch(city);
        }
        //this.props.onNewlocation(location)
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="city"/>
                    <button className="button text-center">Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;
