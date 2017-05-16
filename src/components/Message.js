import React, { Component, PropTypes } from 'react';

class Message extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        return (

        <p className="messenger" id="messenger">
        <span className="title" >TWELVE COINS puzzle</span>   ::    {this.props.msg}
        </p>
        );
    }
}

export default Message;
