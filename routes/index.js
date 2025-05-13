const express = require('express');
const router = express.Router();
const db = require('../server');

// Ruta para la página principal (formulario)
router.get('/', (req, res) => {
  res.render('index', { title: 'Formulario Escolar' });
});

// Ruta para procesar el formulario (POST)
router.post('/estudiante', (req, res) => {
  const { nombre, apellido, grupo, carrera, turno } = req.body;
  const sql = `INSERT INTO Estudiantes (nombre, apellido, grupo, carrera, turno) VALUES (?, ?, ?, ?, ?)`;
  db.run(sql, [nombre, apellido, grupo, carrera, turno], (err) => {
    if (err) {
      console.error('Error al insertar estudiante:', err.message);
      res.send('Error al registrar el estudiante.');
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;