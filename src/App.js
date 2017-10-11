// @flow

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './user';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div className="App-intro">
      <User />
    </div>
  </div>
);

export default App;
