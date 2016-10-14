// using axios to make api calls
var axios = require('axios');

// when using const
// naming convention uses uppercases and underscores
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial';

module.exports = {
    getTemp: function(city){

        /* encodeURIComponent ensures user input is properly encoded
        ** in the url
        ** corresponse to url formasts(spaces`%20`, commas`,`, etc)
        */
        var encodedCity = encodeURIComponent(city);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedCity}`;
        /* takes the location param
        ** passes it to WeatherForm
        ** return value into Weather.jsx after going through promise
        */

        // axios.get takes one param, url
        return axios.get(requestUrl).then(function(res) {
            debugger;
            /* see if the two statements exist
            ** if both exist meaning error
            */

            /* `cod`, `messgae` and `main.temp` are properties
            ** of result object.*/
            if(res.data.cod && res.data.message) {
                // if both exist
                throw new Error(res.data.message)
            } else {
                return res.data.main.temp;
            }
        }, function(res){
            // NOTE: when inputs invalid location name THIS api doesn't throw err by default
            throw new Error(res.data.message);
        });
    }
}
