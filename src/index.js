import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './components/navbar.css';
import Counters from './components/counters';

// npm install --save react-bootstrap bootstrap@3

ReactDOM.render(<Counters />, document.getElementById('root'));
registerServiceWorker();
