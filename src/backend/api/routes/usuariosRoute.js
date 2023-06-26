const { Router } = require('express')
const UsuariosController = require('../controllers/UsuariosController')
const autenticado = require('../middleware/autenticado')
const roles = require('../middleware/roles')

const router = Router()

router.use(autenticado)

router.get('/usuarios', roles(["deus"]), UsuariosController.getAllUsuarios)
router.get('/usuarios/:id', roles(["adm","deus", "jogador"]), UsuariosController.getOneUsuario)
router.post('/usuarios', roles(["deus"]), UsuariosController.createUsuario)
router.put('/usuarios/:id', roles(["deus"]),UsuariosController.updateUsuario)
router.patch('/usuarios/:id', roles(["deus","adm", "jogador"]),UsuariosController.updatePartialUsuario)
router.delete('/usuarios/:id', roles(["deus","adm"]),UsuariosController.deleteUsuario);

module.exports = router