/**
 *  log in Reducer:
 *  ------------
 *  a  user can log in as  :
 *  1- a giver
 *  2- a needer
 *
 *
 */

const initialState = {
    email:'',
    password:'',
};

export const logInTypeReducer = (state = initialState , action)=> {
    switch (action.type) {
        case 'LOGIN_GIVER':
            return {...state ,...action.payload} ;

        case 'LOGIN_NEEDER':
            return {...state ,...action.payload} ;

        default :
            return  state ;
    }

}