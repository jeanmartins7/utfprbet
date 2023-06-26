const { Router } = require('express')
const SegurancaController = require('../controllers/segurancaController')
const roles = require('../middleware/roles')

const router = Router()

router
    .post('/seguranca/acl', roles(["gerente"]),SegurancaController.cadastrarAcl)
    .post('/seguranca/permissoes-roles', roles(["gerente"]),SegurancaController.cadastrarPermissoesRoles)

module.exports = router