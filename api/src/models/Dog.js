const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height_min: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    height_max: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    weight_min: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    weight_max: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    }
  },
  {timestamps: false}
  );

};
