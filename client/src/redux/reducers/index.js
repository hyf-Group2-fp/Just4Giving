
import { combineReducers } from "redux";

// import all reducers
import {userTypeReducer} from "./userTypeReducer";
import { userReducer } from "./userReducer";
import {checkProfile} from "./checkProfileReducer";


// all reducers takes an object with each properties express one reducers
const allReducers = combineReducers({
  userType:userTypeReducer,
  user:userReducer,
  profile:checkProfile,
});

export default allReducers;
