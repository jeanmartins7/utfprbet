const { Router } = require('express')
const UsuariosController = require('../controllers/UsuariosController')

const router = Router()

router.get('/usuarios', UsuariosController.pegaTodosUsuarios)
router.get('/usuarios/:id', UsuariosController.pegaUmUsuario)
router.post('/usuarios', UsuariosController.criaUsuario)
router.put('/usuarios/:id', UsuariosController.atualizaUsuario)
router.patch('/usuarios/:id', UsuariosController.atualizaParcialUsuario)
router.delete('/usuarios/:id', UsuariosController.deletaUsuario);

module.exports = router