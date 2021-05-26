// const Goods = require("../models/Goods");

// //create goods : check the user table for {giver_id , owner_id} and the categories table for {category_id}

// const createGoods = async () => {
//     return await Goods.findOrCreate({
//         where:{
//             giver_id:25,
//             item_name:"Nice chair",
//             category:'Furniture',
//             description:'a very nice chair',
//             image:'',
//             quality: 'New',
//             quantity:1,
//             available:1,
//             taken:0,
//             owner_id:25,
//             category_id:25,
//         }
//     });
// }

// createGoods().then(() => {
//     process.exit() ;

// });
const Categories = require("../models/Categories");
// create categories 1
const createCategories1 = async () => {
    return await  Categories.findOrCreate({
        where:{
            category_name:'Food',
            category_image:'food.png'
        },
    })
}
createCategories1().then(() => {
    process.exit();
});
// create categories 2
const createCategories2 = async () => {
    return await  Categories.findOrCreate({
        where:{
            category_name:'Furnitures',
            category_image:'furnitures.png'
        },
    })
}
createCategories2().then(() => {
    process.exit();
});
// create categories 3
const createCategories3 = async () => {
    return await  Categories.findOrCreate({
        where:{
            category_name:'Tools',
            category_image:'tools.png'
        },
    })
}
createCategories3().then(() => {
    process.exit();
});
// create categories 4
const createCategories4 = async () => {
    return await  Categories.findOrCreate({
        where:{
            category_name:'Babies',
            category_image:'babies.png'
        },
    })
}
createCategories4().then(() => {
    process.exit();
});
// create categories 4
const createCategories5 = async () => {
    return await  Categories.findOrCreate({
        where:{
            category_name:'Sport',
            category_image:'sport.png'
        },
    })
}
createCategories5().then(() => {
    process.exit();
});
// create categories 6
const createCategories6 = async () => {
    return await  Categories.findOrCreate({
        where:{
            category_name:'Electronics',
            category_image:'electronics.png'
        },
    })
}
createCategories6().then(() => {
    process.exit();
});
// create categories 7
const createCategories7 = async () => {
    return await  Categories.findOrCreate({
        where:{
            category_name:'Books',
            category_image:'books.png'
        },
    })
}
createCategories7().then(() => {
    process.exit();
});
// create categories 7
const createCategories8 = async () => {
    return await  Categories.findOrCreate({
        where:{
            category_name:'Other',
            category_image:'other.png'
        },
    })
}
createCategories8().then(() => {
    process.exit();
});
// const jane = await Categories.create({ firstName: "Jane", lastName: "Doe" });
// console.log("Jane's auto-generated ID:", jane.id);
