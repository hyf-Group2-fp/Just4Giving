const Goods = require('../models/Goods');
const User = require('../models/User.js');

const createGoods = async (id, name, cat, desc, qual, quant, cat_id) => {
  console.log('yes', id)
  return await Goods.findOrCreate({
    where: {
      giver_id: id,
      item_name: name,
      category: cat,
      description: desc,
      image: '',
      quality: qual,
      quantity: quant,
      available: 1,
      taken: 0,
      owner_id: id,
      category_id: cat_id,
    },
  });
};

var createGood = async (user_mail, name, cat, desc, qual, quant, cat_id) => {
  return await User.findOne({
    where: {
      email: user_mail
    },
  }).then((userfound) => {
    if (!userfound) {
      return 'not found';
    }
    //get id
    const user = userfound.user_id;   
    return createGoods(user, name, cat, desc, qual, quant, cat_id);
  });
};

//create goods : check the user table for {giver_id , owner_id} and the categories table for {category_id}
const createGoods1 = async () => { 
    await createGood('rita12@gmail.com', 'chair', 'Furnitures', 'a nice chair', 'New', 2, 1);
};
const createGoods2 = async () => { 
  await createGood('rita12@gmail.com', 'closet', 'Furnitures', 'a closet', 'Fairly used', 1, 1);
};
const createGoods3 = async () => { 
  await createGood('sonic123@gmail.com', 'hammer', 'Tools', 'a  new hammer', 'New', 1, 3);
};
const createGoods4 = async () => { 
  await createGood('sam12@gmail.com', 'toys', 'Babies', 'toys for children', 'Fairly used', 3, 4);
};
const createGoods5 = async () => { 
  await createGood('sam12@gmail.com', 'mobile', 'Electronics', 'mobile phone', 'New', 1, 5);
};

const funcs = [
  createGoods1,
  createGoods2,
  createGoods3,
  createGoods4,
  createGoods5,
];

funcs.map(fun => fun());
