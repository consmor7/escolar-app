// Modelo Respuestas_Test
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Modelo Respuestas_Test

const RespuestasTest = sequelize.define('RespuestasTest', {
    id_respuesta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_test: {
      type: DataTypes.INTEGER,
      references: {
        model: TestEstilosAprendizaje,
        key: 'id_test',
      }
    },
    categoria: {
      type: DataTypes.ENUM('visual', 'auditivo', 'sensacion'),
      allowNull: false,
    },
    numero_pregunta: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    puntaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    tableName: 'Respuestas_Test',
    timestamps: false,
  });
  // export default RespuestasTest;
module.exports = RespuestasTest;