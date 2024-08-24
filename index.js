const express = require('express');
const cors = require('cors');

const guerrerosRoutes = require('./routes/guerrerosRoutes');

const app = express();

// Middleware para permitir solicitudes CORS
app.use(cors());

// Middleware para analizar JSON en el cuerpo de la solicitud
app.use(express.json());

// Rutas para los guerreros
app.use('/api', guerrerosRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
