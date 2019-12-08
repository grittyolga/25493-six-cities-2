import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "../signin/signin.jsx";

it(`SignIn correctly renders`, () => {
  const tree = renderer
    .create(<SignIn
      saveAuth={()=>{}}
      history={{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
