'use strict';
const { commerce } = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews',
      [
        {
          userId: 1,
          productId: 1,
          review: commerce.productDescription(),
        },
        {
          userId: 1,
          productId: 1,
          review: commerce.productDescription(),
        },
        {
          userId: 1,
          productId: 2,
          review: commerce.productDescription(),
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
