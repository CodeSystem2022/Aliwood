const app = require('./app');
const database = require('./database');

//Se declara el puerto de la conexion
const PORT = process.env.PORT || 3000;

//Funcion para establecer la conexion con la base de datos MySQL y puesta en marcha del Servidor
function main() {
    database.connect((err) => {
        if (err) throw err;
        console.log('Conectado a la Base de Datos');
    });

    app.listen(PORT, () => {
        console.log('Servidor Encendido');
    });
}

main();