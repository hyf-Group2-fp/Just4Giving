const GoodsForMany = require("../models/GoodsForMany");

// create goodsForMany :check the user table for {needer_id } and the good table for {good_id}

const createGoodsForMany = async () => {
    return await  GoodsForMany.findOrCreate({
        where:{
            goods_id:35 ,
            needer_id:65,
        },
    });
}

createGoodsForMany().then(() => {
    process.exit();
});