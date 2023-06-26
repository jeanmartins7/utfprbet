const { Router } = require('express')
const RoleController = require('../controllers/RoleController')
const roles = require('../middleware/roles')

const router = Router()

router
    .post('/roles', roles(["deus","adm"]),RoleController.cadastrar)
    .get('/roles', roles(["deus","adm"]),RoleController.buscarTodasRoles)
    .get('/roles/id/:id', roles(["deus","adm"]),RoleController.buscarRolePorId)
    .delete('/roles/id/:id', roles(["deus","adm"]),RoleController.deletarRolePorId)
    .put('/roles/id/:id', roles(["deus","adm"]),RoleController.editarRole)

module.exports = router