const { Router } = require('express')
const WalletsController = require('../controllers/WalletsController')
const autenticado = require('../middleware/autenticado')

const router = Router()

router.use(autenticado)

router.get('/wallets', WalletsController.getAllWallets);
router.get('/wallets/:id', WalletsController.getOneWallet);
router.post('/wallets', WalletsController.createWallet);
router.put('/wallets/:id', WalletsController.updateWallet);
router.delete('/wallets/:id', WalletsController.deleteWallet);
router.patch('/wallets/:id', WalletsController.updatePartialWallet);

module.exports = router;
