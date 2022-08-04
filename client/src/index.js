import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = `dev-4ftagp4p.us.auth0.com`;
const clientId = `1sDZDFaBmDDzvch51KuVh2Bug5MSvZQH`;

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri="http://localhost:3000/Editor"
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);