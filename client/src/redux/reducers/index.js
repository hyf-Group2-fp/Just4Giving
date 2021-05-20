
import { combineReducers } from "redux";

// import all reducers
import {signUpReducer} from './signUpReducer' ;
import { signInReducer} from './signinReducer' ;
import {userInfoReducer} from './userInfoReducer'



// all reducers takes an object with each properties express one reducers
const allReducers = combineReducers({
  signUp:signUpReducer,
  signIn:signInReducer,
  uerInfo:userInfoReducer ,
});

export default allReducers;
