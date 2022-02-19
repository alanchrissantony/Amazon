import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import { Provider } from 'react-redux'
import Context, { FirebaseContext } from './store/FirebaseContext';
import firebase from './Firebase/config'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <FirebaseContext.Provider value={{ firebase }}>
        <Context>
          <App />
        </Context>
      </FirebaseContext.Provider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
