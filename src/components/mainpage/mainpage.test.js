import React from "react";
import renderer from "react-test-renderer";
import MainPage from "../mainpage/mainpage.jsx";
import offers from "../../mocks/offers.js";

it(`MainPage correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MainPage
      cardOffers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
