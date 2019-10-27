import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/app/app.jsx";
import offers from "./mocks/offers.js";

const init = (cardOffers) => {
  ReactDOM.render(
      <App
        cardOffers= {cardOffers}
      />,
      document.querySelector(`#root`)
  );
};

init(offers);
