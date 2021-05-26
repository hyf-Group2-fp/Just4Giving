const Categories = require('../models/Categories');

// create categories 1
const createCategories1 = async () => {
  return await Categories.findOrCreate({
    where: {
      category_name: 'Furnitures',
      category_image: 'furnitures.png',
      categories_id:1,
    },
  });
};
createCategories1().then(() => {
  process.exit();
});

// create categories 2
const createCategories2 = async () => {
  return await Categories.findOrCreate({
    where: {
      category_name: 'Food',
      category_image: 'food.png',
      categories_id:2,
    },
  });
};
createCategories2().then(() => {
  process.exit();
});

// create categories 3
const createCategories3 = async () => {
  return await Categories.findOrCreate({
    where: {
      category_name: 'Tools',
      category_image: 'tools.png',
      categories_id:3,
    },
  });
};
createCategories3().then(() => {
  process.exit();
});

// create categories 4
const createCategories4 = async () => {
  return await Categories.findOrCreate({
    where: {
      category_name: 'Babies',
      category_image: 'babies.png',
      categories_id:4,
    },
  });
};
createCategories4().then(() => {
  process.exit();
});

// create categories 5
const createCategories5 = async () => {
  return await Categories.findOrCreate({
    where: {
      category_name: 'Electronics',
      category_image: 'electronics.png',
      categories_id:5,
    },
  });
};
createCategories5().then(() => {
  process.exit();
});

// create categories 6
const createCategories6 = async () => {
  return await Categories.findOrCreate({
    where: {
      category_name: 'Sport',
      category_image: 'sport.png',
      categories_id:6,
    },
  });
};
createCategories6().then(() => {
  process.exit();
});

// create categories 7
const createCategories7 = async () => {
  return await Categories.findOrCreate({
    where: {
      category_name: 'Books',
      category_image: 'books.png',
      categories_id:7,
    },
  });
};
createCategories7().then(() => {
  process.exit();
});

// create categories 8
const createCategories8 = async () => {
  return await Categories.findOrCreate({
    where: {
      category_name: 'Other',
      category_image: 'other.png',
      categories_id:8,
    },
  });
};
createCategories8().then(() => {
  process.exit();
});


