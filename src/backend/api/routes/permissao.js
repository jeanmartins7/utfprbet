const { Router } = require('express')
const PermissaoController = require('../controllers/PermissaoController')
const roles = require('../middleware/roles')

const router = Router()

router
    .post('/permissao', roles(["deus","adm"]),PermissaoController.cadastrar)
    .get('/permissao', roles(["deus","adm"]),PermissaoController.buscarTodasPermissoes)
    .get('/permissao/id/:id', roles(["deus","adm"]),PermissaoController.buscarPermissaoPorId)
    .delete('/permissao/id/:id', roles(["deus","adm"]),PermissaoController.deletarPermissaoPorId)
    .put('/permissao/id/:id',roles(["deus","adm" ]), PermissaoController.editarPermissao)

module.exports = router