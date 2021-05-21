
// Goods actions


// create goods

export const createGoods =(goods) => {
    return{
        type:'CREATE_GOODS' ,
        payload:goods
    }
};


// update goods

export const updateGoods =(goods) => {
    return{
        type:'UPDATE_GOODS' ,
        payload:goods
    }
}

// delete goods

export const deleteGoods =(goods) => {
    return{
        type:'DELETE_GOODS' ,
        payload:goods
    }
}