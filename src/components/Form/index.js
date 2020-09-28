import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import TelegramIcon from '@material-ui/icons/Telegram';

import './form.scss';

const Form = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  // Permet d'avoir une réference sur l'input
  const inputRef = useRef(null);

  // Permet d'avoir le focus sur l'input
  // au chargement de la page
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  const onSendMessage = () => {
    if (inputValue.trim() !== '') {
      sendMessage(inputValue);
      setInputValue('');
    }
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
          ref={inputRef}
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
