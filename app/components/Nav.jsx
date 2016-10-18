const React = require('react');
const {Link, IndexLink} = require('react-router');

/*
** NOTE:Navigation still works if just use <a> tag
** Link allows to customize tab style so
** user knows which page they are on
** When has `IndexRoute` use `IndexLink`
** on `IndexRoute` component instead of `Link
*/

// Use `className` instead of `class` in jsx

// Use foundation HTML structure and classNames to style elements

/* Use React.createClass instead of using presentational components
** to use onSearch function in <form> */
const Nav = React.createClass({
    // Adding support for onSearch method

    onSearch: function(e) {
        e.preventDefault(e);
        alert('not yet wired up')
    },
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li classNmae="menu-text">Hermione Granger</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="serachWeather"/>
                            </li>
                            <li>
                                <button type="submit" className="button" value="Get Weather">Get Weather</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
})

module.exports = Nav;
