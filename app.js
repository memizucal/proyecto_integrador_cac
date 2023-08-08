/*Requiero el modulo dotenv para ocultar datos sensibles*/
require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

const itemRoutes = require('./src/routes/itemsRoutes.js');
const mainRoutes = require('./src/routes/mainRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js')
const { notFound } = require('./src/utils/errorsHandler.js');

/*Define carpeta de archivos estaticos*/
app.use(express.static('public'));

/*Configuracion para el engine*/
app.set('view engine', 'ejs');
app.set('views', './src/views');

/*Parsea los datos recibidos por post*/
app.use(express.urlencoded()); //Convierte lo enviado en el body desde un form a un formato que el servidor pueda entender
app.use(express.json()); //Convierte lo enviado en el body a JSON

/*Middleware a rutas */
app.use('/', mainRoutes);
app.use('/', itemRoutes); //Ruta con api/itemRoutes
app.use('/', shopRoutes);

/*Middleware para manejar el error 404 (Despues de las rutas y antes del .listen)*/
app.use(notFound);

/*Metodo para correr el server*/
app.listen(PORT, ()=> console.log(`Escuchando desde puerto ${PORT}`));