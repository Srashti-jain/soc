import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'
import "@patternfly/react-core/dist/styles/base.css";

import App from "./App";
import { Provider } from 'react-redux'
import store from './store'
//ReactDOM.render(<App />, document.querySelector("#root")); 


createRoot(document.getElementById('root')).render(
     <Provider store={store}><App /></Provider>
  )