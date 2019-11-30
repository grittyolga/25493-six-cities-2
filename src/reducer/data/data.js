const initialState = {
  offers: [],
};


const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
};


const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
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
  }

  return state;
};


export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
