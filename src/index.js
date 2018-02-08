import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery'

require('foundation-sites');
$(document).ready(function($) {
    $(document).foundation();
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
