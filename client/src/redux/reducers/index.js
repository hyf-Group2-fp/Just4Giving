// all reducers combined
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";

// all reducers takes an object with each properties express one reducers
const allReducers = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default allReducers;
