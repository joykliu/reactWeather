const React = require('react');

// keep the parentasis for param when destructuring
const WeatherMessage = ({temp, city}) => (
    <p className="text-center">it is <span>{temp}</span> in  <span>{city}</span> </p>
)

module.exports = WeatherMessage;
