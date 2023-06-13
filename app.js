const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

const PORT = 6000;

// Configuración de middleware

// Establece headers de seguridad
app.use(helmet());

// Permite CORS (Cross Origin Resource Sharing)
app.use(cors());

// Loguea en consola información sobre las respuestas del servidor
app.use(morgan('dev'));

// Interpreta el cuerpo de toda petición en formato JSON
// y lo pone a disposición en la propiedad request.body
app.use(express.json());

// Configuración de rutas definidas en ./routes/app.routes.js

// Se establece de modo similar al middleware, con app.use()
app.use(require('./routes/app.routes'));

app.listen(PORT, () => {
    console.log(`Servidor escuchando peticiones en http://localhost:${PORT}`)
});