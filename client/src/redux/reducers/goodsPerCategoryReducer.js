const initialState = {};

export const goodsPerCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GOODS_PER_CATEGORY':
            return { ...action.payload };
        default:
            return state;
    }
};
