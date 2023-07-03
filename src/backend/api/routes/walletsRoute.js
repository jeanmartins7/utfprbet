const { Router } = require('express')
const WalletsController = require('../controllers/WalletsController')
const autenticado = require('../middleware/autenticado')
const isAdmin = require('../middleware/isAdmin')
const verificaUsuario = require('../middleware/verificaUsuario')

const router = Router()

router.use(autenticado)

router.get('/wallets', isAdmin(), WalletsController.getAllWallets);
router.get('/wallets/:id', verificaUsuario(), WalletsController.getOneWallet);
router.post('/wallets',isAdmin(), WalletsController.createWallet);
router.put('/wallets/:id',isAdmin(), WalletsController.updateWallet);
router.delete('/wallets/:id', isAdmin(), WalletsController.deleteWallet);
router.patch('/wallets/:id', verificaUsuario(), WalletsController.updatePartialWallet);

module.exports = router;
