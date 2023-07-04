const { Router } = require('express')
const WalletsController = require('../controllers/WalletsController')
const autenticado = require('../middleware/autenticado')
const isAdmin = require('../middleware/isAdmin')
const verificaUsuarioWallet = require('../middleware/verificaUsuarioWallet')

const router = Router()

router.use(autenticado)

router.get('/wallets', isAdmin(), WalletsController.getAllWallets);
router.get('/wallets/:id', verificaUsuarioWallet(), WalletsController.getOneWallet);
router.post('/wallets',verificaUsuarioWallet(), WalletsController.createWallet);
router.put('/wallets/:id',isAdmin(), WalletsController.updateWallet);
router.delete('/wallets/:id', isAdmin(), WalletsController.deleteWallet);
router.patch('/wallets/:id', verificaUsuarioWallet(), WalletsController.updatePartialWallet);

module.exports = router;
