'use strict';
// const { commerce } = require("faker");
const loremIpsum = require("lorem-ipsum").loremIpsum;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews',
      [
        {
          userId: 1,
          productId: 1,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 1,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 2,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 2,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 2,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 3,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 3,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 4,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 4,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 5,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 6,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 6,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 6,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 7,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 7,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 8,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 8,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 8,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 9,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 9,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 10,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 10,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 11,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 12,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 12,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 12,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 13,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 13,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 14,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 15,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 15,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 16,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 16,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 17,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 17,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 18,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 19,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 19,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 19,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 20,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 20,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 21,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 21,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 22,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 23,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 23,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 24,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 24,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 25,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 26,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 26,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 26,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 27,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 27,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 28,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 28,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 28,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 29,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 29,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 30,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 30,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 31,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 32,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 32,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 32,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 33,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 33,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 34,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 34,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 34,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 35,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 35,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 36,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 36,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 37,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 38,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 38,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 38,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 39,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 39,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 40,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 40,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 40,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 41,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 41,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 42,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 42,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 43,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 44,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 44,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 44,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 45,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 45,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 46,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 46,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 46,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 47,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 47,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 48,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 48,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 49,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 50,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 50,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 50,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 51,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 51,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 52,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 52,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 52,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 53,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 53,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 54,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 54,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 55,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 56,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 56,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 56,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 57,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 57,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 58,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 59,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 59,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 59,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 60,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 60,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 61,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 62,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 62,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 63,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 63,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 64,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 64,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 65,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 66,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 66,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 66,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 2,
          productId: 67,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 1,
          productId: 67,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 68,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        {
          userId: 3,
          productId: 68,
          review: /*commerce.productDescription()*/ loremIpsum(),
        },
        // {
        //   userId: 1,
        //   productId: 69,
        //   review: /*commerce.productDescription()*/ loremIpsum(),
        // },
        // {
        //   userId: 2,
        //   productId: 69,
        //   review: /*commerce.productDescription()*/ loremIpsum(),
        // },
        // {
        //   userId: 1,
        //   productId: 70,
        //   review: /*commerce.productDescription()*/ loremIpsum(),
        // },
        // {
        //   userId: 2,
        //   productId: 71,
        //   review: /*commerce.productDescription()*/ loremIpsum(),
        // },
        // {
        //   userId: 3,
        //   productId: 72,
        //   review: /*commerce.productDescription()*/ loremIpsum(),
        // },
        // {
        //   userId: 1,
        //   productId: 72,
        //   review: /*commerce.productDescription()*/ loremIpsum(),
        // },
        // {
        //   userId: 2,
        //   productId: 73,
        //   review: /*commerce.productDescription()*/ loremIpsum(),
        // },
        // {
        //   userId: 3,
        //   productId: 73,
        //   review: /*commerce.productDescription()*/ loremIpsum(),
        // },
        // {
        //   userId: 1,
        //   productId: 74,
        //   review: /*commerce.productDescription()*/ loremIpsum(),
        // },
        // {
        //   userId: 2,
        //   productId: 75,
        //   review: /*commerce.productDescription()*/ loremIpsum(),
        // },
        // {
        //   userId: 1,
        //   productId: 75,
        //   review: /*commerce.productDescription()*/ loremIpsum(),
        // },
        // {
        //   userId: 3,
        //   productId: 76,
        //   review: /*commerce.productDescription()*/ loremIpsum(),
        // },
        // {
        //   userId: 3,
        //   productId: 77,
        //   review: /*commerce.productDescription()*/ loremIpsum(),
        // },
        // {
        //   userId: 1,
        //   productId: 77,
        //   review: /*commerce.productDescription()*/ loremIpsum(),
        // },
        // {
        //   userId: 2,
        //   productId: 77,
        //   review: /*commerce.productDescription()*/ loremIpsum(),
        // },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
