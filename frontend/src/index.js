import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';  
import './style.scss';
import {Provider} from "react-redux"
import store from "./store/store.js"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
  </Provider>
);
