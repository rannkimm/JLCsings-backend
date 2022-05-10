'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class musicsheet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  musicsheet.init({
    music: DataTypes.STRING,
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    key: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'musicsheet',
  });
  return musicsheet;
};