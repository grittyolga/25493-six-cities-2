import React from "react";
import renderer from "react-test-renderer";
import {Filterlist} from "../filterlist/filterlist.jsx";


it(`Filterlist correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Filterlist
      currentFilter={`POPULAR`}
      changeFilterType={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
