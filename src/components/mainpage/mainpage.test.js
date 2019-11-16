import React from "react";
import renderer from "react-test-renderer";
import {MainPage} from "../mainpage/mainpage.jsx";
import offers from "../../mocks/offers.js";

it(`MainPage correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MainPage
      cardOffers={offers}
      currentCity={offers[0].city}
      cityOffers={offers.filter((offer) => offer.city === offers[0].city)}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
