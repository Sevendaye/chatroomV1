import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Message from 'src/components/Message';
import './messages.scss';

const Messages = ({ messages }) => {
  const scrollRef = useRef(null);
  useEffect(() => {
    //scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  return (
    <div className="messages" ref={scrollRef}>
      {messages.map((message) => (
        <Message
          key={`mes-${message.id}`}
          messageAuthor={message.author}
          messageBody={message.body}
          owner={message.owner}
        />
      ))}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Messages;
