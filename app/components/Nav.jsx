const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = props => (
    <div>
        <h2>Nav Component</h2>
        {/*Navigation still works if just use <a> tag
            Link allows to customize tab style so
            user knows which page they are on*/}
        {/*When setting up CSS using props
            Replace hyphen with camel case*/}
        {/*When has `IndexRoute` use `IndexLink`
            on `IndexRoute` component
            instead of `Link`*/}
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
)

module.exports = Nav;
