import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataLayer } from './context-api/DataLayer';
import reducer, { initialState } from './context-api/reducer';
import Modal from 'react-modal';

Modal.setAppElement('#root');
ReactDOM.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <App />
  </DataLayer>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
