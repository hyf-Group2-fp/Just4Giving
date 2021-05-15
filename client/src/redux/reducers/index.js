// all reducers combined
import { combineReducers } from "redux";
// import all reducers
import {userTypeReducer} from "./userTypeReducer";

// import { userReducer } from "./userReducer";

// all reducers takes an object with each properties express one reducers
const allReducers = combineReducers({
  userType:userTypeReducer,
});

export default allReducers;
