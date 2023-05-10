import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./sass/main.scss";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import { HashRouter } from "react-router-dom";
import {persistStore} from "redux-persist"; 
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

let store = createStore(rootReducer);
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

serviceWorkerRegistration.register();

