import React from "react";
import renderer from "react-test-renderer";
import Card from "../card/card.jsx";

it(`Card correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Card
      name = { `testName`}
      onClick={()=>{}}
      id = {100}
      index = {1}
      premium = {true}
      image ={ `empty`}
      price = {0}
      bookmark ={false}
      rating = {0}
      type = {`empty`}
      onHover={()=>{}}
      onMouseOut={()=>{}}
      onBookmark={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
