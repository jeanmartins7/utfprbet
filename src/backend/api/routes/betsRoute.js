const { Router } = require('express')
const BetsController = require('../controllers/BetsController')
const autenticado = require('../middleware/autenticado')
const roles = require('../middleware/roles')

const router = Router()

router.use(autenticado)

router.get('/bets', roles(["adm"]), BetsController.getAllBets);
router.get('/bets/:id', roles(["jogador", "adm"]), BetsController.getOneBet);
router.post('/bets', roles(["jogador", "adm"]), BetsController.createBet);
router.put('/bets/:id', roles(["jogador", "adm"]), BetsController.updateBet);
router.patch('/bets/:id', roles(["jogador", "adm"]), BetsController.updatePartialBet);
router.delete('/bets/:id', roles(["jogador", "adm"]), BetsController.deleteBet);

module.exports = router