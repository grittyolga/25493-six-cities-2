import React from "react";
import renderer from "react-test-renderer";
import App from "../app/app.jsx";

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      cardNames={[`cardName1`, `cardName2`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
