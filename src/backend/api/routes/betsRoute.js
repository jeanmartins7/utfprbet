const { Router } = require('express')
const BetsController = require('../controllers/BetsController')
const autenticado = require('../middleware/autenticado')
const isAdmin = require('../middleware/isAdmin')
const verificaUsuarioBet  = require('../middleware/verificaUsuarioBet')

const router = Router()

router.use(autenticado)

router.get('/bets', isAdmin(), BetsController.getAllBets);
router.get('/bets/:id', verificaUsuarioBet(), BetsController.getOneBet);
router.get('/users/bets/', BetsController.getAllBetsByUserId);
router.post('/bets', BetsController.createBet);
router.put('/bets/:id', isAdmin(), BetsController.updateBet);
router.patch('/bets/:id', verificaUsuarioBet(), BetsController.updatePartialBet);
router.delete('/bets/:id', BetsController.deleteBet);

module.exports = router