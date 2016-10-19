const React = require('react');
const Nav = require('Nav');

/* on medium size display use half screen width
** on large display use 1/3 screen width
** on small display center content
*/
const Main = props => (
    <div>
        <Nav/>
        <div className="row">
            <div className="columns medium-6 large-4 small-centered">
                {props.children}
            </div>
        </div>
    </div>
)

module.exports = Main;
