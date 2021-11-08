'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    upvotes: DataTypes.INTEGER,
    link: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
    Product.associate = function(models) {
    Product.belongsTo(models.User, {foreignKey: "userId"}),
    Product.hasMany(models.Review, {foreignKey: "productId"}),
    Product.hasMany(models.Upvote, {foreignKey: "productId"})
  };
  return Product;
};
