import React from "react";
import renderer from "react-test-renderer";
import Map from "../map/map.jsx";
import offers from "../../mocks/offers.js";

it(`Map correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Map
      cardOffers = {offers}
      city = {[52.3709553943508, 4.89309666406198]}
      iconUrl = {`img/pin.svg`}
      iconSize = {[30, 30]}
      zoom ={ 12}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
