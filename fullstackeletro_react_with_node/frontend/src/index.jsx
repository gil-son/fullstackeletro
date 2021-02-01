 import React from 'react';
 import ReactDOM from 'react-dom';
 import './global.css';
 import App from './App.jsx';
//import Control from './control/Control.js';

import {Provider} from 'react-redux';
import store from './store';


 ReactDOM.render(
   <Provider store={store}>
      <App/>
   </Provider>
  ,
  document.getElementById('root')
);


