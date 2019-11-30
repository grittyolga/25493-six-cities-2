import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.USERSTATE;


export const getCity = (state) => {
  return state[NAME_SPACE].city;
};


export const getCityOffers = (state) => {
  return state[NAME_SPACE].cityOffers;
};

export const getActiveItem = (state, stateField) => {
  return state[NAME_SPACE][stateField];
};

export const getCurrentFilter = (state) => {
  return state[NAME_SPACE].cityFilterType;
};

export const getActiveCard = (state) => {
  return state[NAME_SPACE].activeCard;
};
