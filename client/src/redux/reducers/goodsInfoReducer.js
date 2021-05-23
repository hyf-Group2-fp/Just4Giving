 const initialState = {
    goods:[] ,

 }


 export const goodsInfoReducer = (state = initialState , action) => {
    switch (action.type){
        case 'CREATE_GOODS':
            return{ ...action.payload} ;

        case 'UPDATE_GOODS':
            return{ ...action.payload} ;

        case 'DELETE_GOODS':
            return {...action.payload} ;
        default:
            return  state ;
    }

 }

