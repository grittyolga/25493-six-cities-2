import React from "react";
import renderer from "react-test-renderer";
import {App} from "../app/app.jsx";
import offers from "../../mocks/offers.js";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      cardOffers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
