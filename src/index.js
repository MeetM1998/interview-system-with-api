import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { history, store } from "./Redux/store";
import "./Assets/boxicons-2.0.7/css/boxicons.min.css";
import "./Assets/css/errormassage.css";
import "./Assets/css/grid.css";
import "./Assets/css/index.css";
import "./Components/Topnav/styles.css";
import "./Components/Dropdown/styles.css";
import "./Components/Layout/styles.css";
import "./Components/Sidebar/styles.css";

document.title = "Interview Result";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
