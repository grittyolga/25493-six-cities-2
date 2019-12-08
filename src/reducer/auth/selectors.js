import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.AUTH;

export const getAuthData = (state) => {
  return state[NAME_SPACE].authData;
};

export const getSignedIn = (state) => {
  return state[NAME_SPACE].signedIn;
};
