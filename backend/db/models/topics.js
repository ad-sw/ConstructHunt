'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    topic: DataTypes.STRING,
  }, {});
  Topic.associate = function(models) {
    // associations can be defined here
    // Topic.belongsTo(models.Product, {foreignKey: 'productId'})
  };
  return Topic;
};
