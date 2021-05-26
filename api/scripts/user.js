const { cryptPassword } = require('../utils/encryption');
const User = require('../models/User.js');

// user1
const createUser1 = async () => {
  return await User.findOrCreate({
    where: {
      first_name: 'Sonic',
      last_name: 'Bean',
      email: 'sonic123@gmail.com',
      street: 'first street 23',
      phone: '234533335',
      age: 24,
      is_giver: 0,
      is_needer: 1,
      description: 'I love and want  helping others!!',
    },
    defaults: { password: await cryptPassword('JonSmith123'), agreement: 1 },
  });
};

createUser1().then(() => {
  process.exit();
});

// user2
const createUser2 = async () => {
  return await User.findOrCreate({
    where: {
      first_name: 'James',
      last_name: 'Cameron',
      email: 'james12@gmail.com',
      street: ' street 25',
      phone: '234533335',
      age: 24,
      is_giver: 0,
      is_needer: 1,
      description: 'I love helping .... ',
    },
    defaults: { password: await cryptPassword('james1234'), agreement: 1 },
  });
};

createUser2().then(() => {
  process.exit();
});

// user3
const createUser3 = async () => {
  return await User.findOrCreate({
    where: {
      first_name: 'Julie',
      last_name: 'Stevenson',
      email: 'julie12@gmail.com',
      street: ' street 37',
      phone: '4386464664',
      age: 27,
      is_giver: 0,
      is_needer: 1,
      description: 'I love helping others and give them hope ',
    },
    defaults: { password: await cryptPassword('james1234'), agreement: 1 },
  });
};

createUser3().then(() => {
  process.exit();
});

// user4
const createUser4 = async () => {
  return await User.findOrCreate({
    where: {
      first_name: 'Rita',
      last_name: 'Charles',
      email: 'rita12@gmail.com',
      street: ' street 20',
      phone: '4386464664',
      age: 27,
      is_giver: 1,
      is_needer: 0,
      description: 'I love helping others ',
    },
    defaults: { password: await cryptPassword('james1234'), agreement: 1 },
  });
};

createUser4().then(() => {
  process.exit();
});

// user5
const createUser5 = async () => {
  return await User.findOrCreate({
    where: {
      first_name: 'Sam',
      last_name: 'Sterling',
      email: 'sam12@gmail.com',
      street: ' street 102',
      phone: '4386464664',
      age: 30,
      is_giver: 1,
      is_needer: 0,
      description: 'I makes me happy to help others ',
    },
    defaults: { password: await cryptPassword('james1234'), agreement: 1 },
  });
};

createUser5().then(() => {
  process.exit();
});
