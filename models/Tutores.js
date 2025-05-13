// Modelo Tutores
const { DataTypes } = require('sequelize');
const sequelize = require('../db');
//
// Modelo Tutores
const Tutores = sequelize.define('Tutores', {
    id_tutor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'Tutores',
    timestamps: false,
  });
  // export default Tutores;
  module.exports = Tutores;
