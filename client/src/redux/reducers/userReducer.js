/**
 * user profile completed check
 */

const initialState = {
  isLogged: false,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_AUTH":
      return { ...state, isLogged: !state.isLogged };
    default:
      return state;
  }
};
