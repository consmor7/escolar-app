

// Modelo Fichas_Atencion
const { DataTypes } = require('sequelize');
const sequelize = require('../db');
//Modelo Fichas_Atencion

const FichasAtencion = sequelize.define('FichasAtencion', {
    id_ficha: {
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
    id_tutor: {
      type: DataTypes.INTEGER,
      references: {
        model: Tutores,
        key: 'id_tutor',
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    situacion_presentada: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    atencion_otorgada: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    resultados_obtenidos: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  }, {
    tableName: 'Fichas_Atencion',
    timestamps: false,
  });
  // export default FichasAtencion;
  module.exports = FichasAtencion;
  