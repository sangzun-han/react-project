import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/authService";
import CardRepo from "./service/cardRepo";

const authService = new AuthService();
const cardRepo = new CardRepo();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} cardRepo={cardRepo} />
  </React.StrictMode>,
  document.getElementById("root")
);
