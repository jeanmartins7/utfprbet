const sequelize = require("../services/SequelizeService")
const UsuariosService = require("../services/UsuariosService")
const BetsService = require("../services/BetsService")
const { v4: uuidv4 } = require('uuid');

class InstallService{

  static async getInstall(){
    await sequelize.sync({ force: true })

    let usuariosList = [{
      nome: "deus",
      email: "deus@gmail.com",
      senha: "1234",
      admin: true
    },
    {
      nome: "maria",
      email: "maria@gmail.com",
      senha: "1234"
    },
    {
      nome: "ana",
      email: "ana@gmail.com",
      senha: "1234"
    },
    {
      nome: "gabriel",
      email: "gabriel@gmail.com",
      senha: "1234"
    },
    {
      nome: "pedro",
      email: "pedro@gmail.com",
      senha: "1234",
    }]
    
    let betList = [{
      chute: "APROVADO",
      valor: 10,
      disciplina: "EC38B - Programação para Web - C81 ",
    },
    {
      chute: "APROVADO",
      valor: 10,
      disciplina: "EC38B - Programação para Web - C81 ",
    },
    {
      chute: "APROVADO",
      valor: 10,
      disciplina: "EC38B - Programação para Web - C81 ",
    },
    {
      chute: "APROVADO",
      valor: 10,
      disciplina: "EC38B - Programação para Web - C81 ",
    },
    {
      chute: "REPROVADO",
      valor: 10,
      disciplina: "EC38B - Programação para Web - C81 ",
      usuario_id:""
    }]    
    
    let lbets = []
    let lusuarios = []
    
    for (let i = 0; i < usuariosList.length; i++) {
      const user = usuariosList[i]    
      const createdUser = await UsuariosService.createUsuario(user)    
      lusuarios.push(createdUser)
      console.log(createdUser.dataValues.id)

      let bet = betList[i];
      bet.usuario_id = createdUser.dataValues.id
      const createdBet = await BetsService.createBet(bet)
      lbets.push(createdBet)
    }
    const dados = {
      users : lusuarios,
      bets: lbets
    }
    
    return  dados
  }  
}

module.exports = InstallService;