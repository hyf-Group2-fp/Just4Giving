const Categories = require("../models/Categories");

// create categories 1
const createCategories1 = async () => {
    return await  Categories.findOrCreate({
        where:{
            category_name:'Furniture',
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
            category_name:'Clothes',
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
            category_name:'Clothes',
        },
    })
}
createCategories3().then(() => {
    process.exit();
});

// create categories 3
const createCategories3 = async () => {
    return await  Categories.findOrCreate({
        where:{
            category_name:'Clothes',
        },
    })
}
createCategories3().then(() => {
    process.exit();
});
/*
food
homeAndGarden
tools
babies
sport
electronics
books
Other

* */

const jane = await Categories.create({ firstName: "Jane", lastName: "Doe" });
console.log("Jane's auto-generated ID:", jane.id);
