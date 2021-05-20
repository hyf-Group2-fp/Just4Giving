

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
};


export const userInfoReducer = (state = initialState , action) => {
    switch (action.type){
        case "SIGNED_USER_GIVER" :
            return {...state, ...action.payload} ;
        case "SIGNED_USER_NEEDER":
            return {...state, ...action.payload} ;
        default:
            return  state ;

    }

}