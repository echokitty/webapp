import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./state/store";
import GlobalStyles from "./styles/GlobalStyles";
import Routing from "./Routing";
import "./app/i18n";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Suspense fallback={<div />}>
        <Routing />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
