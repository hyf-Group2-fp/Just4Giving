// Auth reducers

const initialState = {
  isLogged: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_AUTH":
      return { ...state, first_name: "John" };
    default:
      return state;
  }
};

/**
 *
 *
 */
