const React = require('react');
const Weather = require('Weather');

const ErrorModal = React.createClass({
    /* NOTE: componentDidMount method allows DOM manipualtion
    ** after all the components have been rendered */

    componentDidMount: function() {
        // create new instance of foundation.reveal
        // accepts jquery selector or `refs`
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function(){
        return(
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>Some title</h4>
                <p>Our error message</p>
                <button className="button hollow" data-close="">
                    FINE!
                </button>
            </div>
        )
    }
})

module.exports = ErrorModal
