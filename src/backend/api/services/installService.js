const usuariosData = require("../models/usuarios")
const betsData = require("../models/bets")
const walletsData = require("../models/wallets")
const sequelize = require("../services/SequelizeService")
const UsuariosService = require("../services/UsuariosService")
const BetsService = require("../services/BetsService")
const WalletsService = require("../services/WalletsService")

class InstallService{

  static async getInstall(){
    await sequelize.sync({ force: true })

    let usuariosList = [{
      id: "10ae95e7-459b-4471-aa16-1a8161e32c2c",
      nome: "deus",
      email: "deus@gmail.com",
      senha: "$2a$08$B0IrgdDlBd7dNKZXjv1Gtuldks1T0Od/eUpXjVvGewr1bLLE8yP/2"
    },
    {
      id: "e0b40af2-0472-481a-be01-de0cf79bebdb",
      nome: "maria",
      email: "maria@gmail.com",
      senha: "$2a$08$B0IrgdDlBd7dNKZXjv1Gtuldks1T0Od/eUpXjVvGewr1bLLE8yP/2"
    },
    {
      id: "b029ef54-d814-4898-ac36-bc47d81438be",
      nome: "ana",
      email: "ana@gmail.com",
      senha: "$2a$08$B0IrgdDlBd7dNKZXjv1Gtuldks1T0Od/eUpXjVvGewr1bLLE8yP/2"
    },
    {
      id: "97807d8f-1276-4355-9e16-3b3ec5468bff",
      nome: "gabriel",
      email: "gabriel@gmail.com",
      senha: "$2a$08$B0IrgdDlBd7dNKZXjv1Gtuldks1T0Od/eUpXjVvGewr1bLLE8yP/2"
    },
    {
      id: "1f9238ae-9286-4cf5-80eb-d7859e03c1f7",
      nome: "pedro",
      email: "pedro@gmail.com",
      senha: "$2a$08$B0IrgdDlBd7dNKZXjv1Gtuldks1T0Od/eUpXjVvGewr1bLLE8yP/2",
    }]
    
    let betList = [{
      id: "d3ed2182-13bf-11ee-be56-0242ac120002",
      usuario_id: "10ae95e7-459b-4471-aa16-1a8161e32c2c",
      chute: "APROVADO",
      valor: 10,
      disciplina: "EC38B - Programação para Web - C81 ",
    },
    {
      id: "da60cdde-13bf-11ee-be56-0242ac120002",
      usuario_id: "e0b40af2-0472-481a-be01-de0cf79bebdb",
      chute: "APROVADO",
      valor: 10,
      disciplina: "EC38B - Programação para Web - C81 ",
    },
    {
      id: "de52cf28-13bf-11ee-be56-0242ac120002",
      usuario_id: "b029ef54-d814-4898-ac36-bc47d81438be",
      chute: "APROVADO",
      valor: 10,
      disciplina: "EC38B - Programação para Web - C81 ",
    },
    {
      id: "ec15ea50-13bf-11ee-be56-0242ac120002",
      usuario_id: "97807d8f-1276-4355-9e16-3b3ec5468bff",
      chute: "APROVADO",
      valor: 10,
      disciplina: "EC38B - Programação para Web - C81 ",
    },
    {
      id: "bd57cdb7-4827-4288-baad-76e5e57cea53",
      usuario_id: "1f9238ae-9286-4cf5-80eb-d7859e03c1f7",
      chute: "REPROVADO",
      valor: 10,
      disciplina: "EC38B - Programação para Web - C81 ",
    }]
    
    let walletList = [{
      id: "d3ed2182-13bf-11ee-be56-0242ac120002",
      usuario_id: "10ae95e7-459b-4471-aa16-1a8161e32c2c",
      pix: "9f85d2bb-fab6-41ff-a07d-8b1ae63285d5",
      saldo: 100,
    
    },
    {
      id: "da60cdde-13bf-11ee-be56-0242ac120002",
      usuario_id: "e0b40af2-0472-481a-be01-de0cf79bebdb",
      pix: "9f85d2bb-fab6-41ff-a07d-8b1ae63285d5",
      saldo: 100,
    
    },
    {
      id: "de52cf28-13bf-11ee-be56-0242ac120002",
      usuario_id: "b029ef54-d814-4898-ac36-bc47d81438be",
      pix: "9f85d2bb-fab6-41ff-a07d-8b1ae63285d5",
      saldo: 100,
    
    },
    {
      id: "ec15ea50-13bf-11ee-be56-0242ac120002",
      usuario_id: "97807d8f-1276-4355-9e16-3b3ec5468bff",
      pix: "9f85d2bb-fab6-41ff-a07d-8b1ae63285d5",
      saldo: 100,
    
    },
    {
      id: "bd57cdb7-4827-4288-baad-76e5e57cea53",
      usuario_id: "1f9238ae-9286-4cf5-80eb-d7859e03c1f7",
      pix: "9f85d2bb-fab6-41ff-a07d-8b1ae63285d5",
      saldo: 100,
    
    }]
    
    let lbets = []
    let lusuarios = []
    let lwallets = []
    
    for (let i = 0; i < usuariosList.length; i++) {
      const user = usuariosList[i]
      const bets = betList[i]
      const wallet = walletList[i]
    
      const createdUser = await UsuariosService.createUsuario(user)
      const createdBet = await BetsService.createBet(bets)
      const createdWallet = await WalletsService.createWallet(wallet)
    
      lusuarios.push(createdUser)
      lbets.push(createdBet)
      lwallets.push(createdWallet)
    }
    
    return res.json({
      status: true, usuariosList: lusuarios, betList: lbets, walletList: lwallets
    })
  }  
}

module.exports = InstallService;
