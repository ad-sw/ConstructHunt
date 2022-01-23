'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'hunter@user.io',
        username: 'Hunter',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'annesophie@user.io',
        username: 'Anne-Sophie',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo', 'Hunter', 'Anne-Sophie'] }
    }, {});
  }
};
