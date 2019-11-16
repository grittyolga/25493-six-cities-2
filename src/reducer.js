import Offers from "../src/mocks/offers";


const initialState = {
  city: Offers[0].city,
  cityOffers: Offers.filter((offer) => offer.city === Offers[0].city)
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
};


const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
        cityOffers: Offers.filter((offer) => offer.city === action.payload)
      });
  }
  return state;
};


export {
  ActionCreator,
  ActionType,
  reducer,
};
