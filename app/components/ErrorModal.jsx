const React = require('react');
const Weather = require('Weather');

const ErrorModal = React.createClass({
    getDefaultProps: function() {
        // define a set of default props to display
        return {
            title: 'Spell better'
        }
    },
    /* NOTE: Use proptypes object to create key value pairs
    ** key is prop name, value is the appropriate
    ** React proptypes element to indicate its type,
    ** weather if it's a boolean, number, object, array, ** string, ect.
    */
    propTypes: {
        title: React.PropTypes.string,
        // use .isRequired property for required props
        message: React.PropTypes.string.isRequired
    },

    /* NOTE: Using component life cycle methods
    ** componentDidMount method allows DOM manipualtion
    ** after the ErrorModal component has been rendered.
    ** automatically gets called by react
    */
    componentDidMount: function() {
        /* create new instance of foundation.reveal
        ** accepts jquery selector or `refs`*/
        var modal = new Foundation.Reveal($('#error-modal'));
        // .open() shows modal
        modal.open();
    },
    render: function(){
        var {title, message} = this.props
        return(
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <button className="button hollow" data-close="">
                    FINE!
                </button>
            </div>
        )
    }
})

module.exports = ErrorModal
