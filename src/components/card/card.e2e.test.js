import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "../card/card.jsx";

Enzyme.configure({adapter: new Adapter()});
it(`App is correctly rendered after relaunch`, () => {
  const clickHandler = jest.fn();
  const card = shallow(<Card
    name = { `testName`}
    onClick={clickHandler}
  />);
  const startButton = card.find(`.place-card__name>a`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
