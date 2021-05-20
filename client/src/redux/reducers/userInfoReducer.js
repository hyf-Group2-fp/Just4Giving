/**
 * User reducer :
 * -----------
*/

const initialState = {
    first_name:'',
    last_name:'',
    age:0,
    email:'',
    street:'',
    phone:'',
    password:'',
    is_giver:0,
    is_needer:0,
    description:'',
    agreement:0,
    signedIn: false,
    signedOut:true ,
    signedInError:false ,
};


export const userInfoReducer = (state = initialState , action) => {
    switch (action.type){
        case 'IS_GIVER':
            return{...state , ...action.payload ,signedIn: true, signedOut: false, signedInError: false};
        case 'IS_NEEDER':
            return {...state , ...action.payload ,signedIn: true, signedOut: false, signedInError: false};
        case 'SIGNED_USER_INFO':
            return {...state , ...action.payload ,signedIn: true, signedOut: false, signedInError: false};
        case 'SIGNED_IN_ERROR':
            return {signedIn: false, signedOut: true, signedInError: true} ;
        case 'SIGNED_OUT':
            return {signedIn: false, signedOut: true} ;
        default:
            return state ;

    }

}