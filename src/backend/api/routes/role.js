const { Router } = require('express')
const RoleController = require('../controllers/RoleController')
const roles = require('../middleware/roles')

const router = Router()

router
    .post('/roles', roles(["gerente"]),RoleController.cadastrar)
    .get('/roles', roles([ "gerente"]),RoleController.buscarTodasRoles)
    .get('/roles/id/:id', roles(["gerente"]),RoleController.buscarRolePorId)
    .delete('/roles/id/:id', roles(["gerente"]),RoleController.deletarRolePorId)
    .put('/roles/id/:id', roles([ "gerente"]),RoleController.editarRole)

module.exports = router