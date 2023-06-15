const { Router } = require('express')
const InstallController = require('../controllers/InstallController')

const router = Router()

router.get('/install', InstallController.install)


module.exports = router