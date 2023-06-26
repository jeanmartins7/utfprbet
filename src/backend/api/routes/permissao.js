const { Router } = require('express')
const PermissaoController = require('../controllers/PermissaoController')
const roles = require('../middleware/roles')

const router = Router()

router
    .post('/permissao', roles(["gerente"]),PermissaoController.cadastrar)
    .get('/permissao', roles([ "gerente"]),PermissaoController.buscarTodasPermissoes)
    .get('/permissao/id/:id', roles([ "gerente"]),PermissaoController.buscarPermissaoPorId)
    .delete('/permissao/id/:id', roles(["gerente"]),PermissaoController.deletarPermissaoPorId)
    .put('/permissao/id/:id',roles(["gerente"]), PermissaoController.editarPermissao)

module.exports = router