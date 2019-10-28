import React from "react";
import renderer from "react-test-renderer";
import DetailPage from "../detailpage/detailpage.jsx";
import offers from "../../mocks/offers.js";

it(`DetailPage correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<DetailPage
      card={offers[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
