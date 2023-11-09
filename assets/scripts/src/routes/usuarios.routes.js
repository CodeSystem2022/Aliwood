const {Router} = require('express');
const {createUsuarios, readUsuarios, updateUsuarios, deleteUsuarios} = require('../controllers/usuarios.controller');

const router = Router();

//Rutas de los endpoints
router.get('/:email', readUsuarios);

router.post('/', createUsuarios);

router.put('/:id', updateUsuarios);

router.delete('/:id', deleteUsuarios);

module.exports = router;