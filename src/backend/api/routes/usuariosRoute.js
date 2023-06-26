const { Router } = require('express')
const UsuariosController = require('../controllers/UsuariosController')
const autenticado = require('../middleware/autenticado')
const roles = require('../middleware/roles')

const router = Router()

router.use(autenticado)

router.get('/usuarios', roles(["gerente"]), UsuariosController.getAllUsuarios)
router.get('/usuarios/:id', roles(["jogador", "gerente"]), UsuariosController.getOneUsuario)
router.post('/usuarios', UsuariosController.createUsuario)
router.post('/usuarios/adm',roles([ "gerente"]), UsuariosController.createUsuarioADM)
router.put('/usuarios/:id', roles(["gerente"]),UsuariosController.updateUsuario)
router.patch('/usuarios/:id', roles(["jogador", "gerente"]),UsuariosController.updatePartialUsuario)
router.delete('/usuarios/:id', roles(["gerente"]),UsuariosController.deleteUsuario);

module.exports = router