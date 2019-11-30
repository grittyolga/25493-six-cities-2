import React from "react";
import renderer from "react-test-renderer";
import MainPage from "../mainpage/mainpage.jsx";
import offers from "../../mocks/offers.js";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../reducer";

it(`MainPage correctly renders after relaunch`, () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  const tree = renderer
    .create(<Provider store={store}>
      <MainPage
        cardOffers={offers}
        currentCity={offers[0].city}
        cityOffers={offers.filter((offer) => offer.city === offers[0].city)}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
