const React = require('react');
const Weather = require('Weather');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

const ErrorModal = React.createClass({
    getDefaultProps: function() {
        // define a set of default props to display
        return {
            title: 'Spell better'
        }
    },
    /* NOTE: Use proptypes object to create key value pairs. key is prop name,
    ** value is the appropriate React proptypes element to indicate its type,
    ** whether if it's a boolean, number, object, array,
    */
    propTypes: {
        title: React.PropTypes.string,
        // use .isRequired property for required props
        message: React.PropTypes.string.isRequired
    },

    /* NOTE: Using component life cycle methods componentDidMount method allows
    ** DOM manipualtion after the ErrorModal component has been rendered.
    ** it automatically gets called by react
    */
    componentDidMount: function() {

        /* NOTE: an error happens when search for new location after put in
        ** invalid location value: search doesnt perform. This is because
        ** after react puts elements in the DOM, foundation, by calling
        ** `modal.open()`, removes them and updates the dom. React doesn't work
        ** well with thrid-party libraries manipulating the dom, therefore
        ** is not able to maintain the state of its elements
        */
        var {title, message} = this.props;
        // data-reveal and data-close are jquery modal plugins by foundation
        var modalMarkup = (
            <div id="erro-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <button calssName="button hollow" data-close="">
                    FINE!
                </button>
            </div>
        );

        /* use ReactDOMServer's built-in `renderToString()` method to select
        ** `modalMarkup` */
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));

        /* NOTE: In the HTML DOM (Document Object Model), everything is a
        ** node: The document itself is a document node. All HTML elements are
        ** element nodes. All HTML attributes are attribute nodes. Text inside
        ** HTML elements are text nodes.
        */

        // looks for the error component and append `$modal` to the html
        $(ReactDOM.findDOMNode(this)).html($modal);
        /* create new instance of foundation.reveal
        ** accepts jquery selector or `refs`*/
        var modal = new Foundation.Reveal($('#error-modal'));
        // .open() shows modal
        // uses Window.open() method in react, bounds component to a popup
        modal.open();
    },
    render: function(){

        return (
            // start with no dom so foundation has nothing to manipulate
            <div>

            </div>
        );
    }
})

module.exports = ErrorModal
