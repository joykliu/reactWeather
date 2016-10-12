var React = require('react');

var WeatherForm = React.createClass({
    onButtonClick: function(e) {
        e.preventDefault();

        var updates = {};
        var city = this.refs.city.value;

        if (city.length > 0) {
            this.refs.city.value = '';
            updates.city = city;
        }
        this.props.onNewCity(updates)
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="city" placeholder="Enter city name"/>
                    <button>Get Weather</button>
                </form>
            </div>
        )
    }
})

module.exports = WeatherForm;
