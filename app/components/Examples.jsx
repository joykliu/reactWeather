const React = require('react');
// Grabbing link attribute off of the react router library
const {Link} = require('react-router');

// two attributes on the Link to specify the path
const Examples = props => (
    <div class="wrapper">
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out: </p>
        <ol>
            <li>
                <Link to='/?location=Toronto'>Toronto, Canada</Link>
            </li>
            <li>
                <Link to='/?location=Rio'>Rio, Brazil</Link>
            </li>
        </ol>
    </div>
)

module.exports = Examples;
