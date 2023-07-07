const express = require('express');
const app = express();
const PORT = 3001;
const itemRoutes = require('./src/routes/itemsRoutes.js')

app.use(express.static('public'));
app.use(express.urlencoded()); //Convierte lo enviado en el body desde un form a un formato que el servidor pueda entender
app.use(express.json()); //Convierte lo enviado en el body a JSON


app.use('/', itemRoutes); //Ruta con api/itemRoutes

app.listen(PORT, ()=> console.log(`Escuchando desde puerto ${PORT}`));