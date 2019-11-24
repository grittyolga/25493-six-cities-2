import React from "react";
import renderer from "react-test-renderer";
import offers from "../../mocks/offers.js";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {ActionCreator, reducer} from "../../reducer";
import withActiveItem from "./with-active-item";
import Cardlist from "../../components/cardlist/cardlist";
import Citylist from "../../components/citylist/citylist";

function getCityList(cardOffers) {
  const cityList = Array.from(cardOffers, (x) => x.city);
  return Array.from(new Set(cityList));
}


it(`With-Active-Item hoc works`, () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  const CardlistWrapped = withActiveItem(Cardlist, `activeCard`, ActionCreator.changeActiveCard);
  const CitylistWrapped = withActiveItem(Citylist, `city`, ActionCreator.changeCity);
  const tree = renderer
    .create(<Provider store={store}>
      <CardlistWrapped
        cityOffers={offers.filter((offer) => offer.city === offers[0].city)}
      />
      <CitylistWrapped
        cityList = {getCityList(offers)}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
