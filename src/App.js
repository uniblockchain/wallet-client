// @flow

import React from 'react';
import { Button } from 'reactstrap';
import './App.css';

const App = () => (
  <div className="app">
    <h1 className="mb-3">Welcome to Change.</h1>
    <h1>Your digital wallet.</h1>
    <div className="bottom">
      <Button color="primary" size="lg" block>
        Sign up
      </Button>
      <Button color="primary" size="lg" block>
        Log in
      </Button>
    </div>
  </div>
);

export default App;
