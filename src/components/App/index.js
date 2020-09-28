// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.css';
import Form from 'src/components/containers/Form';
import Messages from 'src/components/containers/Messages';
import Settings from 'src/components/containers/Settings';

// == Composant
const App = ({ connectWebSocketServer }) => {
  connectWebSocketServer();
  return (
    <div>
      <Settings />
      <div className="app">
        <Messages />
        <Form />
      </div>
    </div>
  );
};

App.propTypes = {
  connectWebSocketServer: PropTypes.func.isRequired,
};
// == Export
export default App;
