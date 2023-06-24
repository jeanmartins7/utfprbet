const bodyParser = require('body-parser')
const usuarios = require('./usuariosRoute')
const bets = require('./betsRoute')
const wallets = require('./walletsRoute')
const auth = require('./authRoute')
const role = require('./role')
const permissao = require('./permissao')
const seguranca = require('./seguranca')
const install = require('./install')


module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    usuarios,
    bets,
    wallets,
    role,
    permissao,
    seguranca,
    install
    
  )
}