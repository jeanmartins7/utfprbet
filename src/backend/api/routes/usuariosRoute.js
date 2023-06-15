const { Router } = require('express')
const UsuariosController = require('../controllers/UsuariosController')

const router = Router()

router.get('/usuarios', UsuariosController.getAllUsuarios)
router.get('/usuarios/:id', UsuariosController.getOneUsuario)
router.post('/usuarios', UsuariosController.createUsuario)
router.put('/usuarios/:id', UsuariosController.updateUsuario)
router.patch('/usuarios/:id', UsuariosController.updatePartialUsuario)
router.delete('/usuarios/:id', UsuariosController.deleteUsuario);

module.exports = router