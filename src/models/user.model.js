import { DataTypes } from "sequelize";

const UserModel = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "Users",
      underscored: true,
    }
  );

  User.associate = (models) => {
    User.hasOne(models.Address, { foreignKey: "userId", as: "Addresses" });
  };

  return User;
};

module.exports = UserModel;
