
import { combineReducers } from "redux";

// import all reducers
import {signUpReducer} from './signUpReducer' ;
import { signInReducer} from './signinReducer' ;



// all reducers takes an object with each properties express one reducers
const allReducers = combineReducers({
  signUp:signUpReducer,
  signIn:signInReducer,
});

export default allReducers;
