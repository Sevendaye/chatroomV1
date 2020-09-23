// == Import npm
import React from 'react';

// == Import
import './styles.css';
import Form from 'src/components/Form';
import Messages from 'src/components/Messages';

// == Composant
const App = () => (
  <div className="app">
    <Form />
    <Messages />
  </div>
);

// == Export
export default App;
