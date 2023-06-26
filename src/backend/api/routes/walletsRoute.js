const { Router } = require('express')
const WalletsController = require('../controllers/WalletsController')
const autenticado = require('../middleware/autenticado')
const roles = require('../middleware/roles')

const router = Router()

router.use(autenticado)

router.get('/wallets', roles(["gerente"]),WalletsController.getAllWallets);
router.get('/wallets/:id',roles(["jogador", "gerente"]),WalletsController.getOneWallet);
router.post('/wallets', roles(["gerente"]),WalletsController.createWallet);
router.put('/wallets/:id', roles([ "gerente"]), WalletsController.updateWallet);
router.delete('/wallets/:id', roles([ "gerente"]),WalletsController.deleteWallet);
router.patch('/wallets/:id', roles(["jogador", "gerente"]),WalletsController.updatePartialWallet);

module.exports = router;
