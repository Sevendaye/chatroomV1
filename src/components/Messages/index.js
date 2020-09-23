import React from 'react';
import PropTypes from 'prop-types';

import Message from 'src/components/Message';

const Messages = ({ monState }) => (
  <div style={{ padding: '1rem' }}>
    {monState.map((message) => <Message messageValue={message.body} />)}
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
