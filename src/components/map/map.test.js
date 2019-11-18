import React from "react";
import renderer from "react-test-renderer";
import {Map} from "../map/map.jsx";
import offers from "../../mocks/offers.js";

it(`Map correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Map
      cardOffers = {offers}
      cityOffers = {offers}
      cityMap = {[52.3709553943508, 4.89309666406198]}
      iconUrlMap = {`img/pin.svg`}
      iconActiveUrlMap = {`img/pin-active.svg`}
      iconSizeMap = {[30, 30]}
      zoomMap = { 12}
      activeCard = {-1}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
