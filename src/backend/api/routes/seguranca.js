const { Router } = require('express')
const SegurancaController = require('../controllers/segurancaController')
const roles = require('../middleware/roles')

const router = Router()

router
    .post('/seguranca/acl', roles(["deus","adm"]),SegurancaController.cadastrarAcl)
    .post('/seguranca/permissoes-roles', roles(["deus","adm"]),SegurancaController.cadastrarPermissoesRoles)

module.exports = router