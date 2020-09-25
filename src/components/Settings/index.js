/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/containers/Field';
import { X } from 'react-feather';

import './settings.scss';

const Settings = ({ settingsHidden, loading, submitLogin, toggleSettingsHidden }) => {
  const handleConnection = (event) => {
    event.preventDefault();
    submitLogin();
  };

  return (
    <div className="settings">
      <div>
        <button className={settingsHidden ? 'settings-btn' : 'settings-btn-close'} type="button" onClick={toggleSettingsHidden}><X /></button>
      </div>
      <div className={!settingsHidden ? 'settings-form-hidden' : 'settings-form-notHidden'}>
        <form className="settings-form" onSubmit={handleConnection}>
          <Field
            inputName="user_email"
            type="email"
            placeholder="Email"
          />
          <Field
            inputName="user_password"
            type="password"
            placeholder="Mot de passe"
          />
          <button type="submit" disabled={loading} onClick={handleConnection}>
            {loading ? 'Chargement...' : 'Envoyer'}
          </button>
        </form>
      </div>
    </div>
  );
};

Settings.defaultProps = {
  loading: false,
};

Settings.propTypes = {
  settingsHidden: PropTypes.bool.isRequired,
  toggleSettingsHidden: PropTypes.func.isRequired,
  submitLogin: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
export default Settings;
