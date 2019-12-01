const FilterType = {
  POPULAR: `POPULAR`,
  PRICE_ASC: `PRICE_ASC`,
  PRICE_DESC: `PRICE_DESC`,
  TOP: `TOP`
};

const initialState = {
  city: `Amsterdam`,
  cityFilterType: FilterType.POPULAR,
  activeCard: -1
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_FILTER_TYPE: `CHANGE_FILTER_TYPE`,
  CHANGE_ACTIVE_CARD: `CHANGE_ACTIVE_CARD`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`
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
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
      });
    case ActionType.CHANGE_FILTER_TYPE: {
      return Object.assign({}, state, {
        cityFilterType: action.payload,
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
