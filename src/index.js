import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/app/app.jsx";

const init = () => {
  ReactDOM.render(
      <App
        cardNames = { [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`]}
      />,
      document.querySelector(`#root`)
  );
};

init();
