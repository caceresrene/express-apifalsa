const express = require('express');
const app = express();

// Inicializar DB
require('./server/config/mongoose.config');
// usar json y sacar datos de URL
app.use(express.json(), express.urlencoded({ extended: true }));
// Importar rutas
const myRoutes = require('./server/routes/joker.routes');
myRoutes(app);
// Ejecutar server
app.listen(8000, () => console.log('🥬Server running'));
