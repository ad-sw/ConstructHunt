'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Products', [
        {
          userId: 1,
          title: "Community Park",
          imageUrl: "https://images.adsttc.com/media/images/5909/381c/e58e/cea7/2500/01e1/slideshow/385-UCB_0029.jpg?1493776401",
          upvotes: 3,
          link: "https://www.archdaily.com/870467/lower-sproul-redevelopment-moore-ruble-yudell-architects-and-planners/5909381ce58ecea7250001e1-lower-sproul-redevelopment-moore-ruble-yudell-architects-and-planners-photo",
          description: "Park on 5th street and Alder Way that includes trees, benches, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "City Hub Building",
          imageUrl: "https://d3igjmthvmn71a.cloudfront.net/wp-content/uploads/nottingham-city-hub-56_50477141943_o-scaled.jpg",
          upvotes: 3,
          link: "https://bondbryan.co.uk/project/nottingham-city-hub/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});
  }
};
