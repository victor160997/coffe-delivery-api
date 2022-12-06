"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const UserModel = (sequelize) => {
    const User = sequelize.define("User", {
        fullName: sequelize_1.DataTypes.STRING,
        email: sequelize_1.DataTypes.STRING,
    }, {
        timestamps: false,
        tableName: "Users",
        underscored: true,
    });
    User.associate = (models) => {
        User.hasOne(models.Address, { foreignKey: "userId", as: "Addresses" });
    };
    return User;
};
module.exports = UserModel;
