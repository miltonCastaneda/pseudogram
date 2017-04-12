import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import './index.css';


firebase.initializeApp({
  apiKey: "AIzaSyC5ZemHv0SmgVOvM3m2jpYR1GYm8-hykV8",
  authDomain: "pseudogram-dd5e0.firebaseapp.com",
  databaseURL: "https://pseudogram-dd5e0.firebaseio.com",
  projectId: "pseudogram-dd5e0",
  storageBucket: "pseudogram-dd5e0.appspot.com",
  messagingSenderId: "385890724357"
});


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
