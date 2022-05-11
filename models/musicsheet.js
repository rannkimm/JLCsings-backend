'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musicsheet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Musicsheet.belongsTo(models.Music, {
        foreignKey: 'music_id',
        as: 'music',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Musicsheet.init({
    music_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'music_id',
      onDelete: 'CASCADE',
      references: {
        model: 'musics',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Musicsheet',
    tableName: 'musicsheets'
  });
  return Musicsheet;
};