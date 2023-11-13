const database = require('../config/database');
const mysql2 = require('mysql2');

const readUsuarios = (req, res) => {
    const { email } = req.params;
    const readQuery = `SELECT * FROM usuarios WHERE email=?;`;

    const query = mysql2.format(readQuery, [email]);

    database.query(query, (err, result) => {
        if(err) throw err;
        if(result[0] != undefined){
            res.json(result[0]);
        }else{
            res.json({message: 'El usuario no existe'});
        }
    });
};

const createUsuarios = (req, res) => {
    const {nombre, apellido, email, contrasenia} = req.body;
    const createQuery = `INSERT INTO usuarios(nombre, apellido, email, contrasenia) VALUES(?, ?, ?, ?);`;
    const query = mysql2.format(createQuery, [nombre, apellido, email, contrasenia]);

    database.query(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send({message: 'Usuario Creado Exitosamente'});
    });
};

const updateUsuarios = (req, res) => {
    const { id } = req.params;
    const {contrasenia} = req.body;
    const updateQuery = `UPDATE usuarios SET contrasenia=? WHERE id=?`;
    const query = mysql2.format(updateQuery, [contrasenia, id]);

    database.query(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json({message: 'Usuario actualizado'});
    });
};

const deleteUsuarios = (req, res) => {
    const { id } = req.params;
    const deleteQuery = `DELETE FROM usuarios WHERE id=?`;
    const query = mysql2.format(deleteQuery, [id]);

    database.query(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json({message: 'Usuario eliminado'});
    });
};

module.exports = {
    createUsuarios,
    readUsuarios,
    updateUsuarios,
    deleteUsuarios,
};