import {cloneDeep} from 'lodash';
const initialState = {
  offers: [],
};


const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  UPDATE_OFFER_FAVORITE: `UPDATE_OFFER_FAVORITE`
};


const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },
  updateOfferFavorite: (offer) => {
    return {
      type: ActionType.UPDATE_OFFER_FAVORITE,
      payload: offer,
    };
  },
};

const Operation = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });
    case ActionType.UPDATE_OFFER_FAVORITE:
      const index = state.offers.findIndex((o) => o.id === action.payload.id);
      const modifiedOffers = cloneDeep(state.offers);
      // eslint-disable-next-line camelcase
      modifiedOffers[index].is_favorite = action.payload.is_favorite;
      return Object.assign({}, state, {
        offers: modifiedOffers
      });
  }

  return state;
};


export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
