import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './settings.scss';

const Settings = ({ email, password, inputEmailChange, inputPasswordChange }) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClose = () => {
    setIsHidden(!isHidden);
  };

  const onEmailChange = (event) => {
    inputEmailChange(event.target.value);
  };

  const onPasswordChange = (event) => {
    inputPasswordChange(event.target.value);
  };

  return (
    <div className="settings">
      <div>
        <button className="settings-close" type="button" onClick={handleClose}>X</button>
      </div>
      <div className={isHidden ? 'settings-form-hidden' : 'settings-form-notHidden'}>
        <form className="settings-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => onEmailChange(event)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => onPasswordChange(event)}
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

Settings.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  inputEmailChange: PropTypes.func.isRequired,
  inputPasswordChange: PropTypes.func.isRequired,
};
export default Settings;
