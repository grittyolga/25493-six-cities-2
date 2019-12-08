import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/index.js";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {compose} from "recompose";
import App from "../src/components/app/app.jsx";
import {createAPI} from './api';

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );
  /* eslint-enable */

  ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
