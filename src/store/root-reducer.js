import {combineReducers} from "redux";
import dataReducer from "./data-reducer/data-reducer";
import userReducer from "./user-reducer/user-reducer";
import utilityReducer from "./utility-reducer/utility-reducer";

const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
  UTILITY: `UTILITY`,
};

export default combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.USER]: userReducer,
  [NameSpace.UTILITY]: utilityReducer,
});
