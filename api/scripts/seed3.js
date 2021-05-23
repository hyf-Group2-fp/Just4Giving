const Goods = require("../models/Goods");

//create goods : check the user table for {giver_id , owner_id} and the categories table for {category_id}

const createGoods = async () => {
    return await Goods.findOrCreate({
        where:{
            giver_id:25,
            item_name:"Nice chair",
            category:'Furniture',
            description:'a very nice chair',
            image:'',
            quality: 'New',
            quantity:1,
            available:1,
            taken:0,
            owner_id:25,
            category_id:25,
        }
    });
}

createGoods().then(() => {
    process.exit() ;

});
