import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
const cv = require('./cv.json');

ReactDOM.render(
  <App cv={cv} lang="fr" />,
  document.getElementById('root')
);
