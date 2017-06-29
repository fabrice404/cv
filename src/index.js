import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import App from './components/App';
const cv = require('./cv.json');
let lang = 'fr';

moment.locale(lang);
ReactDOM.render(<App cv={cv} lang={lang} />, document.getElementById('root'));
