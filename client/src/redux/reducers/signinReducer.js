/**
 *  sign in Reducer:
 *  ------------
 *  the user can  :
 *  1- sign in
 *  2- sign out
 *  @Error : sign in error
 *
 */

const initialState = {
    isSigned: false,
    signInError: false,
};

export const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNED_IN":
            return { ...state, isSigned: true };
        case "SIGNED_OUT":
            return {...state, isSigned: false};
        case "SIGN_IN_ERROR":
            return {...state , signInError: true};
        default:
            return state;
    }
};