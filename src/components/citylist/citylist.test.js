import React from "react";
import renderer from "react-test-renderer";
import {Citylist} from "../citylist/citylist.jsx";
import offers from "../../mocks/offers.js";

function getCityList(cardOffers) {
  const cityList = Array.from(cardOffers, (x) => x.city);
  return Array.from(new Set(cityList));
}

it(`Citylist correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Citylist
      cityList = {getCityList(offers)}
      activeItem= {offers[0].city}
      onDeactivateItem={()=>{}}
      onActivateItem={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
