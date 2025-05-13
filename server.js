const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const indexRoutes = require('./routes/index');

const app = express();
const port = 3000;

// Conectar a la base de datos SQLite
const db = new sqlite3.Database('./db/database.sqlite', (err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite.');
  }
});

// Configurar middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Usar rutas
app.use('/', indexRoutes);

// Crear tablas en la base de datos
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Estudiantes (
      id_estudiante INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      apellido TEXT,
      grupo TEXT,
      carrera TEXT,
      turno TEXT
    )
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS Tutores (
      id_tutor INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT
    )
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS Fichas_Atencion (
      id_ficha INTEGER PRIMARY KEY AUTOINCREMENT,
      id_estudiante INTEGER,
      id_tutor INTEGER,
      fecha DATE,
      situacion_presentada TEXT,
      atencion_otorgada TEXT,
      resultados_obtenidos TEXT,
      observaciones TEXT,
      FOREIGN KEY (id_estudiante) REFERENCES Estudiantes(id_estudiante),
      FOREIGN KEY (id_tutor) REFERENCES Tutores(id_tutor)
    )
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS Test_Estilos_Aprendizaje (
      id_test INTEGER PRIMARY KEY AUTOINCREMENT,
      id_estudiante INTEGER,
      fecha DATE,
      FOREIGN KEY (id_estudiante) REFERENCES Estudiantes(id_estudiante)
    )
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS Respuestas_Test (
      id_respuesta INTEGER PRIMARY KEY AUTOINCREMENT,
      id_test INTEGER,
      categoria TEXT CHECK(categoria IN ('visual', 'auditivo', 'sensacion')),
      numero_pregunta INTEGER,
      puntaje INTEGER,
      FOREIGN KEY (id_test) REFERENCES Test_Estilos_Aprendizaje(id_test)
    )
  `);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Exportar la base de datos para usarla en otros archivos
module.exports = db;