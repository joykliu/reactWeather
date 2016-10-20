const React = require('react');
const {Link} = require('react-router');
/* only use this when only render a props
** and doesn't maintain any state */
const About = props => (
    <div className="row">
        <h1 className="text-center">About</h1>
        <div className="columns large-12 medium-6 small-centered">
            <div className="columns small-12 large-12 medium-12">
                <p>This simple weather app is created with React.js and styled with Foundation CSS. </p>
                <p>It is powered by:</p>
                <ul>
                    <li>
                        <a href="https://facebook.github.io/react/">React.js</a>
                    </li>
                    <li>
                        <a href="http://foundation.zurb.com/">Foundation</a>
                    </li>
                    <li>
                        <a href="https://openweathermap.org/api">Open Weather Map API</a>
                    </li>
                </ul>
                <p>check it out on <a href="https://github.com/joykliu/reactWeather">GitHub</a></p>
            </div>
            <div className="row">
                <div className="columns large-9 medium-9 small-centered text-center">
                    <Link className="button columns large-8 large-centered" to='/'>Get Me Weather!</Link>
                </div>
            </div>
        </div>
    </div>
)

module.exports = About;
