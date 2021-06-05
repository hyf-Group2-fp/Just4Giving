const GoodsForMany = require('../models/GoodsForMany');

// create goodsForMany :check the user table for {needer_id } and the good table for {good_id}

const createGoodsForMany1 = async () => {
  return await GoodsForMany.findOrCreate({
    where: {
      goods_id: 1,
      needer_id: 1,
    },
  });
};

const createGoodsForMany2 = async () => {
  return await GoodsForMany.findOrCreate({
    where: {
      goods_id: 1,
      needer_id: 2,
    },
  });
};

createGoodsForMany1().createGoodsForMany2().then(() => {
  process.exit();
});
