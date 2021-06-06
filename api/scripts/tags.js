const Tags = require('../models/Tags');

// create a tags : check the categories table for {category_id}
// tags 1
const createTags1 = async () => {
  return await Tags.findOrCreate({
    where: {
      category_id: 1,
      tag_name: 'very nice Chair',
    },
  });
};

createTags1().then(() => {
  process.exit();
});

// tags 2
const createTags2 = async () => {
  return await Tags.findOrCreate({
    where: {
      category_id: 8,
      tag_name: 'very nice shirt',
    },
  });
};

createTags2().then(() => {
  process.exit();
});

// tags 3
const createTags3 = async () => {
  return await Tags.findOrCreate({
    where: {
      category_id: 4,
      tag_name: 'Babies clothes',
    },
  });
};

createTags3().then(() => {
  process.exit();
});
