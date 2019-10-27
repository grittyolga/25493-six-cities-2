import React from "react";
import renderer from "react-test-renderer";
import Card from "../card/card.jsx";

it(`Card correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Card
      name = { `testName`}
      onClick={()=>{}}
      id = {100}
      mark = {`empty`}
      image ={ `empty`}
      price = {0}
      bookmark ={false}
      rating = {0}
      type = {`empty`}
      onHover={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
