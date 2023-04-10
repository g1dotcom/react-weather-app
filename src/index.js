import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCheck, faTimes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
