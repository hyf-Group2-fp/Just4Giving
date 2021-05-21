 const initialState = {
     giver_id:0 ,
     available:[] ,
     category_id:[] ,
     description:[] ,
     createdAt:[],
     updatedAt:[],
     goods_id:[],
     image :[],
     item_name:[],
     quality:[],
     quantity:[] ,
     taken:[],
     details:[],

 }


 export const goodsInfoReducer = (state = initialState , action) => {
    switch (action.type){
        case 'CREATE_GOODS':
            return{...state , ...action.payload} ;

        case 'UPDATE_GOODS':
            return{...state , ...action.payload} ;

        case 'DELETE_GOODS':
            return {...state , ...action.payload} ;
    }

 }

