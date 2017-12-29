import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Axios from 'axios'

Axios.interceptors.request.use(requestConfig => {
  console.log(requestConfig)
  
  //Edit requestConfig
  
  return requestConfig
}, error => {
  console.log(error)
  return Promise.reject(error)
})

Axios.interceptors.response.use(requestConfig => {
  console.log(requestConfig)
  
  //Edit requestConfig
  
  return requestConfig
}, error => {
  console.log(error)
  return Promise.reject(error)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
