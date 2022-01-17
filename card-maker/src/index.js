import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/authService";
import ImageUploader from "./service/imageUploader";
import ImageFileInput from "./components/imageFileInput/imageFileInput";
import CardRepo from "./service/cardRepo";

const authService = new AuthService();
const cardRepo = new CardRepo();
const imageUploader = new ImageUploader();

const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepo={cardRepo} />
  </React.StrictMode>,
  document.getElementById("root")
);
