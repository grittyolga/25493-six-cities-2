import {createSelector} from "reselect";
import NameSpace from "../name-spaces";
import {FilterType} from "./userstate";

const NAME_SPACE = NameSpace.USERSTATE;

export const getCity = (state) => {
  return state[NAME_SPACE].city;
};


export const getCityOffers = (state) => {
  const cityOffersFiltered = getCityOffersAll(state);

  switch (state[NAME_SPACE].cityFilterType) {
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
  return cityOffersFiltered;
};

const getCityOffersAll = createSelector(
    (state) => state[NameSpace.DATA].offers,
    (state) => getCity(state),
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export const getActiveItem = (state, stateField) => {
  return state[NAME_SPACE][stateField];
};

export const getCurrentFilter = (state) => {
  return state[NAME_SPACE].cityFilterType;
};

export const getActiveCard = (state) => {
  return state[NAME_SPACE].activeCard;
};
