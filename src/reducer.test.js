import {
  ActionCreator,
  ActionType,
  reducer
} from "./reducer";
import offers from "./mocks/offers.js";


it(`Action creator for changeCity returns correct action`, () => {
  expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
    type: ActionType.CHANGE_CITY,
    payload: `Amsterdam`,
  });
});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    city: offers[0].city,
    cityOffers: offers.filter((offer) => offer.city === offers[0].city)
  });
});

it(`Reducer return right state after changing city`, () => {
  expect(reducer(undefined,
      {
        type: ActionType.CHANGE_CITY,
        payload: `Cologne`
      }
  )).toEqual({
    city: `Cologne`,
    cityOffers: offers.filter((offer) => offer.city === `Cologne`)
  });
});
