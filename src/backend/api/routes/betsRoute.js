const { Router } = require('express')
const BetsController = require('../controllers/BetsController')
const autenticado = require('../middleware/autenticado')
const isAdmin = require('../middleware/isAdmin')
const verificaUsuario = require('../middleware/verificaUsuario')

const router = Router()

router.use(autenticado)

router.get('/bets', isAdmin(), BetsController.getAllBets);
router.get('/bets/:id', verificaUsuario, BetsController.getOneBet);
router.get('/users/:userId/bets', BetsController.getAllBetsByUserId);
router.post('/bets', BetsController.createBet);
router.put('/bets/:id', isAdmin(), BetsController.updateBet);
router.patch('/bets/:id', verificaUsuario, BetsController.updatePartialBet);
router.delete('/bets/:id',verificaUsuario, BetsController.deleteBet);

module.exports = router