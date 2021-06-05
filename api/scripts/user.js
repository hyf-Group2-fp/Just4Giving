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
      is_giver: 1,
      is_needer: 0,
      description: 'I love and want to help others!!',
    },
    defaults: { password: await cryptPassword('12345678'), agreement: 1 },
  });
};

// user2
const createUser2 = async () => {
  return await User.findOrCreate({
    where: {
      first_name: 'James',
      last_name: 'Cameron',
      email: 'james12@gmail.com',
      street: 'street 25',
      phone: '234533335',
      age: 24,
      is_giver: 0,
      is_needer: 1,
      description: 'I need help, I have just arrived from XYZ with my family, there are 3 of us: me, my wife and my 3 year old daughter, we currently live in a refugee camp. We need a new cell phone because the one I had now is broken.',
    },
    defaults: { password: await cryptPassword('12345678'), agreement: 1 },
  });
};

// user3
const createUser3 = async () => {
  return await User.findOrCreate({
    where: {
      first_name: 'Julie',
      last_name: 'Stevenson',
      email: 'julie12@gmail.com',
      street: 'street 37',
      phone: '4386464664',
      age: 27,
      is_giver: 0,
      is_needer: 1,
      description: 'We urgently need help, they are 2 brothers of 20 years, I am XX and my brother is ZZ,. We arrived last Saturday and we really need clean clothes. We are from XYZ and we love your country, we hope to meet you soon. Thanks.',
    },
    defaults: { password: await cryptPassword('12345678'), agreement: 1 },
  });
};

// user4
const createUser4 = async () => {
  return await User.findOrCreate({
    where: {
      first_name: 'Rita',
      last_name: 'Charles',
      email: 'rita12@gmail.com',
      street: 'street 20',
      phone: '4386464664',
      age: 27,
      is_giver: 1,
      is_needer: 0,
      description: 'I love helping others',
    },
    defaults: { password: await cryptPassword('12345678'), agreement: 1 },
  });
};

// user5
const createUser5 = async () => {
  return await User.findOrCreate({
    where: {
      first_name: 'Sam',
      last_name: 'Sterling',
      email: 'sam12@gmail.com',
      street: 'street 102',
      phone: '4386464664',
      age: 30,
      is_giver: 1,
      is_needer: 0,
      description: 'I makes me happy to help others',
    },
    defaults: { password: await cryptPassword('12345678'), agreement: 1 },
  });
};

const funcs = [
  createUser1,
  createUser2,
  createUser3,
  createUser4,
  createUser5
];

funcs.map(fun => fun());

/*
was
createUserN().then(() => {
  process.exit();
});
*/
