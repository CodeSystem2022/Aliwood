const {Router} = require('express');
const {createProducto, readProductos, updateProducto, deleteProducto} = require('../controllers/productos.controller');

const router = Router();


router.get('/', readProductos);

router.post('/', createProducto);

router.put('/:id', updateProducto);

router.delete('/:id', deleteProducto);

module.exports = router;