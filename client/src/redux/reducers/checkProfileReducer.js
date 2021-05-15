/**
 * check if the user profile is completed :
 * ---------------------------------------
 * 1- completed
 * 2- not completed:
 *
 */


const initialState = {
    profile_completed:false ,
};

export const checkProfile = (state = initialState , action) => {
    switch (action.type){
        case 'PROFILE_COMPLETE':
            return {...state , profile_completed: true };
        case 'PROFILE_NOT_COMPLETE':
            return {...state, profile_completed: false };
        default:
            return state ;
    }

}

