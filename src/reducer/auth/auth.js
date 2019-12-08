const initialState = {
  signedIn: false,
  authData: {}
};


const ActionType = {
  SAVE_AUTH: `SAVE_AUTH`
};

const ActionCreator = {
  saveAuth: (data) => ({
    type: ActionType.SAVE_AUTH,
    payload: data,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SAVE_AUTH:
      return Object.assign({}, state, {
        authData: action.payload,
        signedIn: true
      });
  }
  return state;
};


export {
  ActionCreator,
  ActionType,
  reducer,
};

