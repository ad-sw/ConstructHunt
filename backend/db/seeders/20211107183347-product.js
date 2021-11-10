'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Products', [
        {
          userId: 2,
          title: "Community Park",
          imageUrl: "https://images.adsttc.com/media/images/5909/381c/e58e/cea7/2500/01e1/slideshow/385-UCB_0029.jpg?1493776401",
          upvotes: 3,
          link: "https://www.archdaily.com/870467/lower-sproul-redevelopment-moore-ruble-yudell-architects-and-planners/5909381ce58ecea7250001e1-lower-sproul-redevelopment-moore-ruble-yudell-architects-and-planners-photo",
          description: "Park on 5th street and Alder Way that includes trees, benches, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          title: "Community Park",
          imageUrl: "https://images.adsttc.com/media/images/5909/381c/e58e/cea7/2500/01e1/slideshow/385-UCB_0029.jpg?1493776401",
          upvotes: 3,
          link: "https://www.archdaily.com/870467/lower-sproul-redevelopment-moore-ruble-yudell-architects-and-planners/5909381ce58ecea7250001e1-lower-sproul-redevelopment-moore-ruble-yudell-architects-and-planners-photo",
          description: "Park on 5th street and Alder Way that includes trees, benches, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});
  }
};
