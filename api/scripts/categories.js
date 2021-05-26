const Categories = require('../models/Categories');

// create categories 1
const createCategories1 = async () => {
  return await Categories.findOrCreate({
    where: {
      category_name: 'Food',
      categories_image: '',
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
      category_name: 'Furnitures',
      categories_image: '',
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
      categories_image: '',
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
      categories_image: '',
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
      category_name: 'Sport',
      categories_image: '',
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
      category_name: 'Electronics',
      categories_image: '',
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
      categories_image: '',
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
      category_name: 'Electronics',
      categories_image: '',
    },
  });
};
createCategories8().then(() => {
  process.exit();
});


