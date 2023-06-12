const { Router } = require('express')
const WalletsController = require('../controllers/WalletsController')

const router = Router()


router.get('/wallets', WalletsController.pegaTodasWallets);
router.get('/wallets/:id', WalletsController.pegaUmaWallet);
router.post('/wallets', WalletsController.criaWallet);
router.put('/wallets/:id', WalletsController.atualizaWallet);
router.put('/wallets/:id', WalletsController.atualizaWallet);
router.delete('/wallets/:id', WalletsController.deletaWallet);
router.patch('/wallets/:id', WalletsController.atualizaParcialWallet);

module.exports = router;
