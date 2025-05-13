const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de Sequelize con SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Nombre del archivo de la base de datos
});

sequelize.authenticate()
  .then(() => console.log('Base de datos conectada...'))
  .catch(err => console.log('Error de conexión: ' + err));

// Rutas
app.use('/api', require('./routes')); // Las rutas estarán en el directorio 'routes'

// Página principal (renderizando la vista EJS)
app.get('/', (req, res) => {
  res.render('index'); // Renderiza el archivo 'views/index.ejs'
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
