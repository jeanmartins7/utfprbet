const bodyParser = require('body-parser')
const usuarios = require('./usuariosRoute')
const bets = require('./betsRoute')
const wallets = require('./walletsRoute')
const auth = require('./authRoute')
const install = require('./install')


module.exports = app => {
  app.use(
    bodyParser.json(),
    install,
    auth,
    usuarios,
    bets,
    wallets    
  )
}