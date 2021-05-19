const { cryptPassword } = require('../utils/encryption');
const User = require('../models/User.js');
const Tags = require("../models/Tags");
const Categories = require("../models/Categories");
const Goods = require("../models/Goods");
const GoodsForMany = require("../models/GoodsForMany");
/**
 * To create a data in the tables :
 * 1- first comment all the code .
 * 2- start with @createUsers run it and change the email and run it a gain to have enough users in your table
 * 3- comment @createUsers and uncommented @createCategories and run the code and change the categories and add them
 * 4- comment @createCategories and uncommented @createTags  and run the code and change the category_name  and add them
 * 5- comment @createTags  and uncommented @createGoods  and run the code and change the category_id and giver_id  and add them
 * 6- comment @createGoods  and uncommented @createGoodsForMany  and run the code and change the goods_id and needer_id  and add them
 */

// create users  change the info for each user you want to create
const createUsers = async () => {
    return await User
        .findOrCreate({
            where: {
                first_name:'Sonic',
                last_name :'Bean',
                email:'sonic123@gmail.com',
                street:'first street 23',
                phone:'234533335',
                age: 24,
                is_giver:0,
                is_needer:1,
                description:'I love and want  helping others!!',
            },
            defaults: {password: await cryptPassword('JonSmith123'), agreement:1}
        });
}

createUsers().then(() => {
    process.exit();
}) ;



// create categories : change the info for each categories  you want to create

const createCategories = async () => {
    return await  Categories.findOrCreate({
        where:{
            category_name:'Furniture',
        },
    })
}

createCategories().then(() => {
    process.exit();
});




// create a tags : check the categories table for {category_id}

const createTags = async () => {
    return await Tags.findOrCreate({
        where:{
            category_id: 25,
            tag_name:'very nice Chair',
        },

    });

}

createTags().then(()=> {
    process.exit();
});


//create goods : check the user table for {giver_id , owner_id} and the categories table for {category_id}

const createGoods = async () => {
    return await Goods.findOrCreate({
        where:{
            giver_id:25,
            item_name:"Nice chair",
            category:'Furniture',
            description:'a very nice chair',
            image:'',
            quality: 1,
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




