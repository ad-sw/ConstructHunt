'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Topics',
    [
      {
        topic: 'Freelance',
      },
      {
        topic: 'Open Source',
      },
      {
        topic: 'User Experience',
      },
      {
        topic: 'Design Tools',
      },
      {
        topic: 'Developer Tools',
      },
      {
        topic: 'Home',
      },
      {
        topic: 'Productivity',
      },
      {
        topic: 'Education',
      },
      {
        topic: 'Health & Fitness',
      },
      {
        topic: 'Music',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Topics', null, {});
  }
};
