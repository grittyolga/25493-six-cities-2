const initialState = {
  isAuthorizationRequired: true,
  signedIn: false,
  authData: {}
};


const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SAVE_AUTH: `SAVE_AUTH`
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  saveAuth: (data) => ({
    type: ActionType.SAVE_AUTH,
    payload: data,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      });
    case ActionType.SAVE_AUTH:
      return Object.assign({}, state, {
        authData: action.payload,
        signedIn: true,
        isAuthorizationRequired: false
      });
  }
  return state;
};


export {
  ActionCreator,
  ActionType,
  reducer,
};

