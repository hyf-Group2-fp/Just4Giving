
/**
 *  userTypeReducer:
 *  the user can be :
 *  1-  giver
 *  2-  needer
 *
 */

const initialState = {
    first_name:'',
    last_name:'',
    age:0,
    email:'',
    street:'',
    phone:'',
    password:'',
    image:'',
    is_giver:0,
    is_needer:0,
    description:'',
    agreement:0,
};

export const userTypeReducer = (state = initialState , action) => {
    switch (action.type){
        case 'IS_GIVER':
            return {...state,...action.payload };
        case 'IS_NEEDER':
            return {...state,...action.payload };
        default:
            return state ;
    }

}