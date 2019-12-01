import {combineReducers} from "redux";
import {reducer as data} from "./data/data";
import {reducer as userstate} from "./userstate/userstate";
import NameSpace from "./name-spaces";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USERSTATE]: userstate
});
