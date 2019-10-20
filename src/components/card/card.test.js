import React from "react";
import renderer from "react-test-renderer";
import Card from "../card/card.jsx";

it(`Card correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Card
      name = { `testName`}
      onClick={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
