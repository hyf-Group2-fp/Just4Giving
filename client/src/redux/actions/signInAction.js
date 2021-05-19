// sign in action
/**
 * Actions creators (sign in ).
 * the user can :
 * 1- sign in
 * 2- sign out
 */

// sign in action


export const signIn = (credentials) => {
    return {
        type: "SIGNED_IN",
        payload: credentials,
    };
};

// sign in error
export const signInError = () => {
    return {
        type: "SIGN_IN_ERROR",
    };
};



// sign out action
export const signOut = () => {
    return {

        type:'SIGNED_OUT',
    }
}



