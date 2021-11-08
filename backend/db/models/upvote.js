'use strict';

module.exports = (sequelize, DataTypes) => {
  const Upvote = sequelize.define('Upvote', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
    Upvote.associate = function(models) {
    Upvote.belongsTo(models.User, {foreignKey: "userId"}),
    Upvote.belongsTo(models.Product, {foreignKey: "productId"})
  };
  return Upvote;
};
