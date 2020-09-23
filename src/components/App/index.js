// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Form from 'src/components/containers/Form';
import Messages from 'src/components/containers/Messages';

// == Composant
const App = () => (
  <div className="app">
    <Messages />
    <Form />
  </div>
);

// == Export
export default App;
