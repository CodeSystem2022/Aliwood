const {Router} = require('express');
const {createUsuarios, readUsuarios, updateUsuarios, deleteUsuarios} = require('../controllers/usuarios.controller');

const router = Router();


router.get('/:email', readUsuarios);

router.post('/', createUsuarios);

router.put('/:id', updateUsuarios);

router.delete('/:id', deleteUsuarios);

module.exports = router;