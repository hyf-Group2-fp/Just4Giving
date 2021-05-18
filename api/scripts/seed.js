const { cryptPassword } = require('../utils/encryption');
const User = require('../models/User.js');
const Categories = require("../models/Categories");
const Tags = require("../models/Tags");
const Goods = require("../models/Goods");
const GoodsForMany = require("../models/GoodsForMany");

// create users
const createUsers = async () => {
  return await User.findOrCreate({
      where: {
          first_name:'Julie',
          last_name :'Bean',
          email:'juli3@gmail.com',
          street:'first street 23',
          phone:'234533335',
          age: 24,
          is_giver:1,
          is_needer:0,
          description:'I love helping others , it is really  ',
      },
      defaults: {password: await cryptPassword('JonSmith123'), agreement:1}
    });
}

createUsers()
  .then(() => {
    process.exit();
  });

// create categories

const createCategories = async () => {
    return await  Categories.findOrCreate({
        where:{
            category_name:'Books',
        },
    })
}

createCategories().then(() => {
    process.exit();
});


// create a tags

const createTags = async () => {
    return await Tags.findOrCreate({
        where:{
            category_id: 1,
            tag_name:'Chair',
        },

    });

}

createTags().then(()=> {
    process.exit();
});



//create goods

const createGoods = async () => {
    return await Goods.findOrCreate({
     where:{
         giver_id:1,
         item_name:"chair",
         category:'furniture',
         description:'a very nice chair ',
         image:'',
         quality: 1,
         quantity:1,
         available:1,
         taken:0,
         owner_id:1,
         category_id:1,
     }
    });
}

createGoods().then(() => {
    process.exit() ;

});

// create goodsForMany

const createGoodsForMany = async () => {
    return await  GoodsForMany.findOrCreate({
        where:{
            goods_id:1 ,
            needer_id:1,
        },
    });
}

createGoodsForMany().then(() => {
    process.exit();
});