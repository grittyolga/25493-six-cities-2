import React from "react";
import renderer from "react-test-renderer";
import App from "../app/app.jsx";
import offers from "../../mocks/offers.js";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../reducer";

it(`App correctly renders after relaunch`, () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  const tree = renderer
    .create(<Provider store={store}>
      <App
        cardOffers={offers}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
