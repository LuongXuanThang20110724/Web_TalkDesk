import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import AppUser from "./AppUser";
<<<<<<< HEAD
import AppAdmin from "./AppAdmin";
=======
>>>>>>> ThangLuong
import AppLogin from "./AppLogin";

import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById("root"));
const CLIENT_ID = process.env.REACT_APP_OAUTH_CLIENT;
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
<<<<<<< HEAD
        {localStorage.getItem("login") == "admin" ? (
          <AppAdmin />
        ) : localStorage.getItem("login") == "user" ? (
=======
        {localStorage.getItem("login") == "admin" ||
        localStorage.getItem("login") == "user" ? (
>>>>>>> ThangLuong
          <AppUser />
        ) : (
          <AppLogin />
        )}
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
