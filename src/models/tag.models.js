import { DataTypes } from "sequelize";

const TagModel = (sequelize) => {
  const Tag = sequelize.define(
    "Tag",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      tag: DataTypes.ENUM({
        values: [
            "Tradicional",
            "Gelado",
            "Com Leite",
            "Especial",
            "Alocoólico",
          ]
      })
    },
    {
      timestamps: false,
      tableName: "Tags",
      underscored: true,
    }
  );

  return Tag;
};

module.exports = TagModel;
