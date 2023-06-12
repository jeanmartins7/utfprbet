const { Router } = require('express')
const BetsController = require('../controllers/BetsController')

const router = Router()

router.get('/bets', BetsController.pegaTodasBets);
router.get('/bets/:id', BetsController.pegaUmaBet);
router.post('/bets', BetsController.criaBet);
router.put('/bets/:id', BetsController.atualizaBet);
router.patch('/bets/:id', BetsController.atualizaParcialBet);

module.exports = router