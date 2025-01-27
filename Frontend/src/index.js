import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // This imports Bootstrap's CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // This imports Bootstrap's JavaScript bundle

import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
