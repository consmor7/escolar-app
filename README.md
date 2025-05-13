# Escolar App

   Una aplicación web para gestionar datos escolares, construida con Node.js, Express, SQLite y EJS.

   ## Instalación

   1. Clona el repositorio:
      ```bash
      git clone https://github.com/tu-usuario/escolar-app.git
      ```
   2. Instala las dependencias:
      ```bash
      npm install
      ```
   3. Inicia el servidor:
      ```bash
      node server.js
      ```
   4. Abre `http://localhost:3000` en tu navegador.

   ## Estructura del proyecto

   - `db/`: Contiene la base de datos SQLite.
   - `public/`: Archivos estáticos (CSS, JS).
   - `views/`: Plantillas EJS.
   - `routes/`: Rutas de la aplicación.
   - `server.js`: Archivo principal del servidor.

   ## Base de datos

   La aplicación usa SQLite con las siguientes tablas:
   - Estudiantes
   - Tutores
   - Fichas_Atencion
   - Test_Estilos_Aprendizaje
   - Respuestas_Test

   ## Licencia

   [MIT License](LICENSE)