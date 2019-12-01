import {combineReducers} from "redux";
import {reducer as data} from "./data/data";
import {reducer as userstate} from "./userstate/userstate";
import {reducer as auth} from "./auth/auth";
import NameSpace from "./name-spaces";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USERSTATE]: userstate,
  [NameSpace.AUTH]: auth
});
