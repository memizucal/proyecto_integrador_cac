const express = require('express');
const app = express();
const PORT = 3001;
const itemRoutes = require('./src/routes/itemsRoutes.js');
const { notFound } = require('./src/utils/errorsHandler.js');

/*Define carpeta de archivos estaticos*/
app.use(express.static('public'));

/*Parsea los datos recibidos por post*/
app.use(express.urlencoded()); //Convierte lo enviado en el body desde un form a un formato que el servidor pueda entender
app.use(express.json()); //Convierte lo enviado en el body a JSON

/*Middleware a rutas */
app.use('/', itemRoutes); //Ruta con api/itemRoutes

/*Middleware para manejar el error 404 (Despues de las rutas y antes del .listen)*/
app.use(notFound);

/*Metodo para correr el server*/
app.listen(PORT, ()=> console.log(`Escuchando desde puerto ${PORT}`));