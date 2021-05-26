const initialState = {
  goods_id: 0,
  giver_id: 0,
  item_id: 0,
  category: '',
  description: '',
  image: '',
  quality: '',
  quantity: 0,
  taken: 0,
  available: 1,
  category_id: 0,
};

export const goodsPerCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOODS_PER_CATEGORY':
      return { ...action.payload };
    default:
      return state;
  }
};
