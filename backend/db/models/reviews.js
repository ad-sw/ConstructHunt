'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: "userId"}),
    Review.belongsTo(models.Product, {foreignKey: "productId"})
  };
  return Review;
};
