import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './redux/rootReducer';
import reduxThunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

function LoggerMiddleware(store) { // промежуточная функция
    return function(next) {
        return function(action) {
            const result = next(action)
            console.log('Middleware', store.getState())
            return result
        }
    }
}


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(LoggerMiddleware, reduxThunk)));


ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
