import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TelegramIcon from '@material-ui/icons/Telegram';

import './form.scss';

const Form = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    sendMessage(inputValue);
    setInputValue('');
  };

  const onSendMessage = () => {
    sendMessage(inputValue);
    setInputValue('');
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="input"
          placeholder="Saisissez votre message..."
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={onSendMessage} type="button">
          <TelegramIcon />
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};
export default Form;
