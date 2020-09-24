import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './message.scss';

const Message = ({ messageBody, messageAuthor, owner }) => (
  <div className={classNames('message', { 'message-owner': owner })}>
    <span className="message-span">{messageAuthor}</span>
    <div className="message-body">{messageBody}</div>
  </div>
);

Message.defaultProps = {
  owner: false,
};

Message.propTypes = {
  messageBody: PropTypes.string.isRequired,
  messageAuthor: PropTypes.string.isRequired,
  owner: PropTypes.bool,
};
export default Message;
