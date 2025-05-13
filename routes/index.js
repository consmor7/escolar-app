const express = require('express');
const router = express.Router();

// Rutas principales
router.get('/', (req, res) => {
  res.send('API de Gestión Escolar');
});

// Rutas para Estudiantes
router.get('/estudiantes', (req, res) => {
  res.send('Listado de estudiantes');
});

// Rutas para Fichas de Atención
router.get('/fichas', (req, res) => {
  res.send('Listado de fichas de atención');
});

// Rutas para Tests de Estilo de Aprendizaje
router.get('/tests', (req, res) => {
  res.send('Listado de tests');
});

// Rutas para Respuestas de Tests
router.get('/respuestas', (req, res) => {
  res.send('Listado de respuestas');
});

module.exports = router;
