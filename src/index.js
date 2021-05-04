import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { store } from './store';
import { Provider } from 'react-redux';


// bind the store using provder to the App


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);




// done change the following lines
if (window.Cypress) {
    window.store = store
}
