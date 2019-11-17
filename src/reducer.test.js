import {
  ActionCreator,
  ActionType,
  FilterType,
  reducer
} from "./reducer";
import offers from "./mocks/offers.js";


it(`Action creator for changeCity returns correct action`, () => {
  expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
    type: ActionType.CHANGE_CITY,
    payload: `Amsterdam`,
  });
});

it(`Action creator for changeFilterType returns correct action`, () => {
  expect(ActionCreator.changeFilterType(FilterType.POPULAR)).toEqual({
    type: ActionType.CHANGE_FILTER_TYPE,
    payload: FilterType.POPULAR,
  });
});

it(`Action creator for changeActiveCard returns correct action`, () => {
  expect(ActionCreator.changeActiveCard(2)).toEqual({
    type: ActionType.CHANGE_ACTIVE_CARD,
    payload: 2,
  });
});


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    city: offers[0].city,
    cityOffers: offers.filter((offer) => offer.city === offers[0].city),
    cityFilterType: FilterType.POPULAR,
    activeCard: -1
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
    cityOffers: offers.filter((offer) => offer.city === `Cologne`),
    cityFilterType: FilterType.POPULAR,
    activeCard: -1
  });
});

it(`Reducer return right state after changing filterType`, () => {
  expect(reducer(undefined,
      {
        type: ActionType.CHANGE_FILTER_TYPE,
        payload: FilterType.TOP,
      }
  )).toEqual({
    city: offers[0].city,
    cityOffers: offers.filter((offer) => offer.city === offers[0].city).sort(function (a, b) {
      return b.rating - a.rating;
    }),
    cityFilterType: FilterType.TOP,
    activeCard: -1
  });
});

it(`Reducer return right state after changing active card`, () => {
  expect(reducer(undefined,
      {
        type: ActionType.CHANGE_ACTIVE_CARD,
        payload: 100,
      }
  )).toEqual({
    city: offers[0].city,
    cityOffers: offers.filter((offer) => offer.city === offers[0].city),
    cityFilterType: FilterType.POPULAR,
    activeCard: 100
  });
});

