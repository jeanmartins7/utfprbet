const { Router } = require('express')
const WalletsController = require('../controllers/WalletsController')
const autenticado = require('../middleware/autenticado')
const roles = require('../middleware/roles')

const router = Router()

router.use(autenticado)

router.get('/wallets', roles(["adm","deus"]),WalletsController.getAllWallets);
router.get('/wallets/:id',roles(["adm","deus", "jogador"]),WalletsController.getOneWallet);
router.post('/wallets', roles(["adm","deus"]),WalletsController.createWallet);
router.put('/wallets/:id', roles(["adm","deus"]), WalletsController.updateWallet);
router.delete('/wallets/:id', roles(["deus"]),WalletsController.deleteWallet);
router.patch('/wallets/:id', roles(["adm","deus", "jogador"]),WalletsController.updatePartialWallet);

module.exports = router;
