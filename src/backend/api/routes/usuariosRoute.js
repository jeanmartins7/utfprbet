const { Router } = require('express')
const UsuariosController = require('../controllers/UsuariosController')
const autenticado = require('../middleware/autenticado')
const isAdmin = require('../middleware/isAdmin')
const verificaUsuario = require('../middleware/verificaUsuario')

const router = Router()

router.use(autenticado)

router.get('/usuarios', isAdmin(), UsuariosController.getAllUsuarios)
router.get('/usuarios/:id', verificaUsuario(), UsuariosController.getOneUsuario)
router.post('/usuarios', verificaUsuario(), UsuariosController.createUsuario)
router.post('/usuarios/adm', isAdmin(), UsuariosController.createUsuarioADM)
router.put('/usuarios/:id', isAdmin(), UsuariosController.updateUsuario)
router.patch('/usuarios/:id', verificaUsuario(),UsuariosController.updatePartialUsuario)
router.delete('/usuarios/:id', isAdmin(), UsuariosController.deleteUsuario);

module.exports = router