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
        // pull value out of search input field
        var location = this.refs.search.value;
        // encoding url
        var encodedLocation = encodeURIComponent(location);
        if (location.length > 0) {
            // clearing the input field's value
            this.refs.search.value = '';
            // resetting url to pass in encoded location value
            window.location.hash = `#/?location=${encodedLocation}`;
        }
    },
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Hermione Granger</li>
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
                                <input type="search" ref="search" placeholder="search Weather by city"/>
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
