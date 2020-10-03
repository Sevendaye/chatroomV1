import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import TelegramIcon from '@material-ui/icons/Telegram';

import './form.scss';

const Form = ({ sendMessage, changeMessage, inputValue, author }) => {
  // Permet d'avoir une réference sur l'input
  const inputRef = useRef(null);

  // Permet d'avoir le focus sur l'input
  // au chargement de la page
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const handleChange = (event) => {
    changeMessage(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      sendMessage();
    }
  };

  const onSendMessage = () => {
    if (inputValue.trim() !== '') {
      sendMessage();
    }
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="input"
          disabled={author === null}
          placeholder={author === null ? 'Veuillez vous identifiez' : 'Saisissez votre message...'}
          value={inputValue}
          onChange={handleChange}
          ref={inputRef}
        />
        <button type="button" disabled={author === null} onClick={onSendMessage}>
          <TelegramIcon />
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  changeMessage: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  author: PropTypes.string,
};
export default Form;
