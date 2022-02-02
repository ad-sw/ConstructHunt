'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    userId: DataTypes.INTEGER,
    topicId: DataTypes.INTEGER,
    name: DataTypes.STRING(40),
    thumbnailUrl: DataTypes.STRING,
    galleryImage1: DataTypes.STRING,
    galleryImage2: DataTypes.STRING,
    galleryImage3: DataTypes.STRING,
    link: DataTypes.STRING,
    tagline: DataTypes.STRING(60),
    description: DataTypes.STRING(260),
  }, {});
  Product.associate = function(models) {
    Product.belongsTo(models.User, {foreignKey: "userId"}),
    Product.hasMany(models.Topic, {foreignKey: "topicId"}),
    Product.hasMany(models.Review, {foreignKey: "productId", onDelete: "CASCADE", hooks: true})
  };
  return Product;
};
