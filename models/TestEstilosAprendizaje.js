// Modelo Test_Estilos_Aprendizaje
const { DataTypes } = require('sequelize');
const sequelize = require('../db');
//
// Modelo Test_Estilos_Aprendizaje
// Modelo Test_Estilos_Aprendizaje
const TestEstilosAprendizaje = sequelize.define('TestEstilosAprendizaje', {
    id_test: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_estudiante: {
      type: DataTypes.INTEGER,
      references: {
        model: Estudiantes,
        key: 'id_estudiante',
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    tableName: 'Test_Estilos_Aprendizaje',
    timestamps: false,
  });

  // export default TestEstilosAprendizaje;
  module.exports = TestEstilosAprendizaje;