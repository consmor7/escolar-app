const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Estudiantes = sequelize.define('Estudiantes', {
  id_estudiante: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  grupo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  carrera: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  turno: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'Estudiantes',
  timestamps: false,
});

module.exports = Estudiantes;
