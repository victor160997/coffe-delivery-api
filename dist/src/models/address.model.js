"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const AddressModel = (sequelize) => {
    const Address = sequelize.define("Address", {
        id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        cep: sequelize_1.DataTypes.INTEGER,
        street: sequelize_1.DataTypes.STRING,
        number: sequelize_1.DataTypes.INTEGER,
        district: sequelize_1.DataTypes.STRING,
        complement: sequelize_1.DataTypes.STRING,
        city: sequelize_1.DataTypes.STRING,
        userId: { type: sequelize_1.DataTypes.INTEGER, foreignKey: true },
    }, {
        timestamps: false,
        tableName: "Addresses",
        underscored: true,
    });
    Address.associate = (models) => {
        Address.belongsTo(models.User, { foreignKey: 'userId', as: 'Users' });
    };
    return Address;
};
module.exports = AddressModel;
