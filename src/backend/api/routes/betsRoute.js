const { Router } = require('express')
const BetsController = require('../controllers/BetsController')
const autenticado = require('../middleware/autenticado')
const roles = require('../middleware/roles')

const router = Router()

router.use(autenticado)

router.get('/bets', roles(["deus","adm", "jogador"]), BetsController.getAllBets);
router.get('/bets/:id', roles(["deus","adm", "jogador"]), BetsController.getOneBet);
router.get('/users/:userId/bets',roles(["deus","adm", "jogador"]), BetsController.getAllBetsByUserId);
router.post('/bets', roles(["deus","adm", "jogador"]), BetsController.createBet);
router.put('/bets/:id',roles(["deus","adm", "jogador"]), BetsController.updateBet);
router.patch('/bets/:id', roles(["deus","adm", "jogador"]), BetsController.updatePartialBet);
router.delete('/bets/:id', roles(["deus","adm", "jogador"]), BetsController.deleteBet);

module.exports = router