const express = require('express');
const cors = require('cors');

const usuariosRoutes = require('../routes/usuarios.routes');

//middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//endpoints
app.use('/usuarios', usuariosRoutes);


module.exports = app;
