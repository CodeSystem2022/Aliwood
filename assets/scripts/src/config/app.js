const express = require('express');
const cors = require('cors');

const usuariosRoutes = require('../routes/usuarios.routes');
const productosRoutes = require('../routes/productos.routes');

//middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//endpoints
app.use('/usuarios', usuariosRoutes);
app.use('/productos', productosRoutes);


module.exports = app;
