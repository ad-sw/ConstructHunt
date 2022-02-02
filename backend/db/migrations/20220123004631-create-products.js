'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Users"}
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(40)
      },
      thumbnailUrl: {
        allowNull: false,
        type: Sequelize.STRING(400)
      },
      galleryImage1: {
        allowNull: true,
        type: Sequelize.STRING(400)
      },
      galleryImage2: {
        allowNull: true,
        type: Sequelize.STRING(400)
      },
      galleryImage3: {
        allowNull: true,
        type: Sequelize.STRING(400)
      },
      link: {
        allowNull: false,
        type: Sequelize.STRING(400)
      },
      tagline: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(260)
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};
