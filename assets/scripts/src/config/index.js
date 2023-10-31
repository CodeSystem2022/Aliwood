const app = require('./app');
const database = require('./database');

const PORT = process.env.PORT || 3000;

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