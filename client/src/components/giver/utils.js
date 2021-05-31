function getCategoryId(category) {
  let category_id = 0;
  if (category === 'Furnitures') {
    category_id = 1;
  }
  if (category === 'Food') {
    category_id = 2;
  }
  if (category === 'Tools') {
    category_id = 3;
  }
  if (category === 'Babies') {
    category_id = 4;
  }
  if (category === 'Electronics') {
    category_id = 5;
  }
  if (category === 'Sport') {
    category_id = 6;
  }
  if (category === 'Books') {
    category_id = 7;
  }
  if (category === 'Other') {
    category_id = 8;
  }
  return category_id;
}

export {
  getCategoryId
}