import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/store';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import axios from 'axios';
import { apiUrl } from './Default/apiUrl';
import firebaseConfig from './firebase';

axios.defaults.baseURL = apiUrl;

axios.interceptors.request.use(request => {
  const userAuth = localStorage.getItem('userToken');
  const accessToken = userAuth ? localStorage.getItem('userToken') : "";
  request.headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";
  return request;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
  console.log(error.response);
  return Promise.reject(error);
});

class MainApp extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig)
  }
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}


ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();