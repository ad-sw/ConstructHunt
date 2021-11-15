'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Products', [
        {
          userId: 1,
          title: "Plaza Park",
          imageUrl: "https://i.pinimg.com/originals/f7/aa/87/f7aa873cf80572b82a7125201f840f37.jpg",
          link: "https://hzhang.photoshelter.com/image/I0000f_.gxrOBCT8",
          description: "Park on 5th street and Alder Way that includes trees, benches, water fountains, tables, and sculptor pieces",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "City Hub Building",
          imageUrl: "https://d3igjmthvmn71a.cloudfront.net/wp-content/uploads/nottingham-city-hub-56_50477141943_o-scaled.jpg",
          link: "https://bondbryan.co.uk/project/nottingham-city-hub/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Boulevard Park",
          imageUrl: "https://i.pinimg.com/originals/ce/f7/48/cef748b2d9d35b8cc72f70810906d77b.jpg",
          link: "https://www.archdaily.com/174300/levinson-plaza-mission-park-mikyoung-kim-design?ad_medium=gallery",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Public Library",
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fda%2F0b%2Fc3%2Fda0bc3da40ddff4d001eca5145342416.jpg&f=1&nofb=1",
          link: "https://www.spl.org/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          title: "Memorial Park",
          imageUrl: "https://worldstrides.com/wp-content/uploads/2015/10/Tour-Highlight-Vietnam-and-Monument-_-iStock_000063717879_Large-min.jpg",
          link: "https://www.vvmf.org/",
          description: "Between Pike and 7th Steet including an outdoor seating area and community rooms throughout a few stories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: "Fountain Park",
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F96%2F7e%2F93%2F967e93b456c0c37580e4a8eb3fe5941d.jpg&f=1&nofb=1",
          link: "https://www.portland.gov/parks/lovejoy-fountain-park",
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
