const database = require('../config/database');
const mysql2 = require('mysql2');

//Se crea el CRUD para interactuar con la Base de Datos

//Busca un usuario a traves de su email
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

//Crea un usuario guardando los datos basicos (nombre, apellido, email, contrasenia, fecha_de_registro)
const createUsuarios = (req, res) => {
    const {nombre, apellido, email, contrasenia} = req.body;
    const createQuery = `INSERT INTO usuarios(nombre, apellido, email, contrasenia, fecha_de_registro) VALUES(?, ?, ?, ?, current_timestamp());`;
    const query = mysql2.format(createQuery, [nombre, apellido, email, contrasenia]);

    database.query(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send({message: 'Usuario Creado Exitosamente'});
    });
};

//Actualiza un usuario a traves de su ID de usuario
const updateUsuarios = (req, res) => {
    const { id } = req.params;
    const {contrasenia, dni, numero_de_telefono, direccion, codigo_postal, direccion_envio, preferencia_contacto, localidad} = req.body;
    const updateQuery = `UPDATE usuarios SET contrasenia=?, dni=?, numero_de_telefono=?, direccion=?, codigo_postal=?, direccion_envio=?, preferencia_contacto=?, localidad=? WHERE id=?;`;
    const query = mysql2.format(updateQuery, [contrasenia, dni, numero_de_telefono, direccion, codigo_postal, direccion_envio, preferencia_contacto, localidad, id]);

    database.query(query, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.json({message: 'Usuario actualizado'});
    });
};

//Elimina un usuario a traves de su ID de usuario
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