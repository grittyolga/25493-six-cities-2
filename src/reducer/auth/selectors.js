import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.AUTH;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].isAuthorizationRequired;
};

export const getAuthData = (state) => {
  return state[NAME_SPACE].authData;
};

export const getSignedIn = (state) => {
  return state[NAME_SPACE].signedIn;
};
