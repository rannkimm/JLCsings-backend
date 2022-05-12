'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Music extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Music.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),

      Music.hasMany(models.Musicsheet, {
        foreignKey: 'music_id',
        as: 'thisMusic',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Music.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      } 
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false
    },
    video: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Music',
    tableName: 'musics'
  });
  return Music;
};