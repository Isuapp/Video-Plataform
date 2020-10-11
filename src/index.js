import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import App from './routes/App'

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,

    document.getElementById('app')
);