// get goods per category

export const createGoodsPerCategory = (goods) => {
  return {
    type: 'GOODS_PER_CATEGORY',
    payload: goods,
  };
};
