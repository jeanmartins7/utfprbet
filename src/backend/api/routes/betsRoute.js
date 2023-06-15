const { Router } = require('express')
const BetsController = require('../controllers/BetsController')

const router = Router()

router.get('/bets', BetsController.getAllBets);
router.get('/bets/:id', BetsController.getOneBet);
router.post('/bets', BetsController.createBet);
router.put('/bets/:id', BetsController.updateBet);
router.patch('/bets/:id', BetsController.updatePartialBet);
router.delete('/bets/:id', BetsController.deleteBet);

module.exports = router