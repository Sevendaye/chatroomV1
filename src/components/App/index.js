// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Form from 'src/components/containers/Form';
import Messages from 'src/components/containers/Messages';
import Settings from 'src/components/containers/Settings';

// == Composant
const App = () => (
  <div>
    <Settings />
    <div className="app">
      <Messages />
      <Form />
    </div>
  </div>
);

// == Export
export default App;
