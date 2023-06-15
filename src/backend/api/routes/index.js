const bodyParser = require('body-parser')
const usuarios = require('./usuariosRoute')
const bets = require('./betsRoute')
const wallets = require('./walletsRoute')
const install = require('./install')
const auth = require('./authRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    usuarios,
    bets,
    wallets,
    install
    
  )
}