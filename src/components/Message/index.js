import React from 'react';
import PropTypes from 'prop-types';

import './message.scss';

const Message = ({ messageValue }) => (
  <div className="message">
    <span className="message-span">Super Chat</span>
    <div className="message-bulle" />
    <div className="message-body">{messageValue}</div>
  </div>
);

Message.propTypes = {
  messageValue: PropTypes.string.isRequired,
};
export default Message;
