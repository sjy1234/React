import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Login from "./components/login";
import Welcome from "./components/Welcome";
import Clock from "./components/Clock";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Welcome name="宋建业" />
    <Clock />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
