 const initialState = { } ;


 export const goodsInfoReducer = (state = initialState , action) => {
    switch (action.type){
        case 'CREATE_GOODS':
            return {...state , ...action.payload} ;

        case 'UPDATE_GOODS':
            return {...state , ...action.payload} ;

        case 'DELETE_GOODS':
            return {...state , ...action.payload} ;
        default:
            return  state ;
    }

 }

