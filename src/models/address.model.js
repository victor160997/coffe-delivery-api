import { DataTypes } from "sequelize";

const AddressModel = (sequelize) => {
  const Address = sequelize.define(
    "Address",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      cep: DataTypes.INTEGER,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
      district: DataTypes.STRING,
      complement: DataTypes.STRING,
      city: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      timestamps: false,
      tableName: "Addresses",
      underscored: true,
    }
  );

  Address.associate = (models) => {
    Address.belongsTo(models.User,
      { foreignKey: 'userId', as: 'Users' });
  };

  return Address;
};

module.exports = AddressModel;
