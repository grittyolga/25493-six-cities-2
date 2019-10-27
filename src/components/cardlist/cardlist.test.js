import React from "react";
import renderer from "react-test-renderer";
import Cardlist from "../cardlist/cardlist.jsx";
import offers from "../../mocks/offers.js";

it(`Cardlist correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Cardlist
      cardOffers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
