import React from 'react';
import PropTypes from 'prop-types';

import Message from 'src/components/Message';
import './messages.scss';

const Messages = ({ monState }) => (
  <div className="messages">
    {monState.map((message) => <Message key={`mes-${message.id}`} messageValue={message.body} />)}
  </div>
);

Messages.propTypes = {
  monState: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Messages;
