// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { createStore, compose, applyMiddleware } from "redux"
// import rootReducer from './reducers/rootReducer';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
// root.render(
//   <React.StrictMode>
//    <Provider store={store}> <App /> </Provider>
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import App from './App';
import './index.css';

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

