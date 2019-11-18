import Offers from "../src/mocks/offers";

const FilterType = {
  POPULAR: `POPULAR`,
  PRICE_ASC: `PRICE_ASC`,
  PRICE_DESC: `PRICE_DESC`,
  TOP: `TOP`
};

const initialState = {
  city: Offers[0].city,
  cityOffers: Offers.filter((offer) => offer.city === Offers[0].city),
  cityFilterType: FilterType.POPULAR,
  activeCard: -1
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_FILTER_TYPE: `CHANGE_FILTER_TYPE`,
  CHANGE_ACTIVE_CARD: `CHANGE_ACTIVE_CARD`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeFilterType: (cityFilterType) => ({
    type: ActionType.CHANGE_FILTER_TYPE,
    payload: cityFilterType
  }),
  changeActiveCard: (activeCard) => ({
    type: ActionType.CHANGE_ACTIVE_CARD,
    payload: activeCard,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
        cityOffers: Offers.filter((offer) => offer.city === action.payload)
      });
    case ActionType.CHANGE_FILTER_TYPE: {
      const cityOffersFiltered = Offers.filter((offer) => offer.city === state.city);
      switch (action.payload) {
        case FilterType.POPULAR:
          break;
        case FilterType.PRICE_ASC:
          cityOffersFiltered.sort(function (a, b) {
            return a.price - b.price;
          });
          break;
        case FilterType.PRICE_DESC:
          cityOffersFiltered.sort(function (a, b) {
            return b.price - a.price;
          });
          break;
        case FilterType.TOP:
          cityOffersFiltered.sort(function (a, b) {
            return b.rating - a.rating;
          });
          break;
      }

      return Object.assign({}, state, {
        cityFilterType: action.payload,
        cityOffers: cityOffersFiltered
      });
    }
    case ActionType.CHANGE_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeCard: action.payload,
      });
  }
  return state;
};


export {
  ActionCreator,
  ActionType,
  FilterType,
  reducer,
};
