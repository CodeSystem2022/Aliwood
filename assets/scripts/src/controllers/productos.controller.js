const database = require('../config/database');
const mysql2 = require('mysql2');

const readProductos = (req, res) => {
    const readQuery = `SELECT * FROM productos;`;

    const query = mysql2.format(readQuery);

    database.query(query, (err, result) => {
        if (err) throw err;
        if (result[0] != undefined) {
            res.json(result);
        } else {
            res.json({ message: 'El Producto no existe' });
        }
    });
};

const createProducto = (req, res) => {
    const { imagen, precio, descripcion, descuento, stock, nombre, categoria } = req.body;
    const createQuery = `INSERT INTO producto(imagen, precio, descripcion, descuento, stock, nombre, categoria) VALUES(?, ?, ?, ?, ?, ?, ?);`;
    const query = mysql2.format(createQuery, [imagen, precio, descripcion, descuento, stock, nombre, categoria]);

    database.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send({ message: 'Producto Creado Exitosamente' });
    });
};

const updateProducto = (req, res) => {
    const { id } = req.params;
    const { imagen, precio, descripcion, descuento, stock, nombre, categoria } = req.body;
    const updateQuery = `UPDATE productos SET imagen=?, precio=?, descripcion=?, descuento=?, stock=?, nombre=?, categoria=?, WHERE id=?;`;
    const query = mysql2.format(updateQuery, [imagen, precio, descripcion, descuento, stock, nombre, categoria, id]);

    database.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.json({ message: 'Producto actualizado' });
    });
};

const deleteProducto = (req, res) => {
    const { id } = req.params;
    const deleteQuery = `DELETE FROM productos WHERE id=?`;
    const query = mysql2.format(deleteQuery, [id]);

    database.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.json({ message: 'Producto eliminado' });
    });
};

module.exports = {
    createProducto,
    readProductos,
    updateProducto,
    deleteProducto,
};