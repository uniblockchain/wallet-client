import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import tracker from './tracker';

tracker.initialize();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
