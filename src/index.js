import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer";
import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/app/app.jsx";
import offers from "./mocks/offers.js";

const init = (cardOffers) => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  /* eslint-enable */
  ReactDOM.render(<Provider store={store}>
    <App
      cardOffers= {cardOffers}
    />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init(offers);
