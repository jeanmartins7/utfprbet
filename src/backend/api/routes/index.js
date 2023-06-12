const bodyParser = require('body-parser')
const usuarios = require('./usuariosRoute')
const bets = require('./betsRoute')
const wallets = require('./walletsRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    usuarios,
    bets,
    wallets
  )
}