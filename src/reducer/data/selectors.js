import {createSelector} from "reselect";
import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.DATA;


export const getOffers = (state) => {
  console.log(state, "state")
  return state[NAME_SPACE].offers;
};
