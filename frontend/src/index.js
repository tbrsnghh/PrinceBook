import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./style.scss";
import { Provider } from "react-redux";
import AOS from 'aos';
import 'aos/dist/aos.css';
import store from "./store/store.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
// Khởi tạo AOS
AOS.init({
  duration: 500, // thời gian animation
  easing: 'ease-in-out', // kiểu easing
  once: true, // chỉ chạy animation một lần
});
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
