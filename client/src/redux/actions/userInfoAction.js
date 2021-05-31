
/**
 * User Action :
 * ------------
 *
 *
 */

export const userGiver = (user) => {
    return{
        type:'IS_GIVER',
        payload:user
    }
};


export const userNeeder = (user) => {
    return{
        type:'IS_NEEDER',
        payload:user ,
    }
};

export const signedUserInfo =(user) => {
    return {
        type:'SIGNED_USER_INFO',
        payload: user,
    }
}


export const signedUserError = () => {
    return{
        type:'SIGNED_IN_ERROR',
    }
}


export const signedUserOut = () => {
    return{
        type:'SIGNED_OUT',
    }
}