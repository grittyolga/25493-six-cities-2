import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "../card/card.jsx";

Enzyme.configure({adapter: new Adapter()});
it(`Card is correctly handles clicks`, () => {
  const clickHandler = jest.fn();
  const card = shallow(<Card
    id = {100}
    name = { `testName`}
    mark = {`empty`}
    image ={ `empty`}
    price = {0}
    bookmark ={false}
    rating = {0}
    type = {`empty`}
    onHover={()=>{}}
    onClick={clickHandler}
  />);
  const cardNameLink = card.find(`.place-card__name>a`);
  cardNameLink.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});


it(`Info about active card is correct on hover`, () => {
  const hoverHandler = jest.fn();
  const card = shallow(<Card
    id = {101}
    name = { `testName2`}
    mark = {`empty`}
    image ={ `empty`}
    price = {0}
    bookmark ={false}
    rating = {0}
    type = {`empty`}
    onHover={hoverHandler}
    onClick={()=>{}}
  />);
  const article = card.find(`.place-card`);
  article.simulate(`mouseover`);
  expect(hoverHandler).toHaveBeenCalledWith(101);
});
