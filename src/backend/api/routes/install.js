const express = require("express")
const router = express.Router()
const InstallController = require("../controllers/InstallController")

router.get('/install', InstallController.getInstall);

module.exports = router