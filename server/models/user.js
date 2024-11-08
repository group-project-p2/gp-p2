'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.GameSession,{foreignKey:"PlayerId1"})
      User.hasMany(models.GameSession,{foreignKey:"PlayerId2"})
    }
  }
  User.init(
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: `User Name is required`,
          },
          notNull: {
            args: true,
            msg: `User Name is required`,
          },
        },
      },
      win: DataTypes.INTEGER,
      lose: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};