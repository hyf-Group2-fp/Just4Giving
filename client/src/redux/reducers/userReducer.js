/**
 *  userReducer:
 *  ------------
 *  the user can  :
 *  1- log in
 *  2- log out
 *  @Error : log in error
 *
 */

const initialState = {
  isLogged: false,
  loginError: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return { ...state, isLogged: true };
    case "LOGGED_OUT":
      return {...state, isLogged: false};
    case "LOGIN_ERROR":
      return {...state , loginError: true};
    default:
      return state;
  }
};
