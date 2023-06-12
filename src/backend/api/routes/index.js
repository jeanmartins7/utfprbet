const bodyParser = require('body-parser')
const usuarios = require('./usuariosRoute')
const bets = require('./betsRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    usuarios,
    bets
  )
}