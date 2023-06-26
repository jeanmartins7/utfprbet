const express = require("express")
const router = express.Router()
const sequelize = require("../services/SequelizeService")
const database = require('../models');

router.get('/install', async (req, res) => {
  await database.sequelize.sync({ force: true })

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

  let permissoesList = [{
    id: "70dfcf9f-74db-4de1-a9e0-b2ef83364496",
    nome: "jogar",
    descricao: "pode jogar",


  },
  {
    id: "bd3c812e-7062-425c-b98e-5ea9ce8b69cb",
    nome: "editar",
    descricao: "pode editar",


  },
  {
    id: "32acf530-f572-4b65-945c-4d74d8407ee4",
    nome: "deus",
    descricao: "pode tudo",

  }]
  let roleList = [{
    id: "a2807e26-3c3a-4500-ad2b-83c2560f0434",
    nome: "jogador",
    descricao: "Cria um user jogador",


  },
  {
    id: "6761f2b8-bdf4-42f5-9663-55e32a559362",
    nome: "adm",
    descricao: "Cria um user adm",


  },
  {
    id: "9c79b059-33cb-42a6-b455-169a49841748",
    nome: "deus",
    descricao: "Cria um novo deus",

  }]
  let roles_permissoesList = [{
    id: 1,
    role_id: "a2807e26-3c3a-4500-ad2b-83c2560f0434",
    permissao_id: "70dfcf9f-74db-4de1-a9e0-b2ef83364496",

  },
  {
    id: 2,
    role_id: "6761f2b8-bdf4-42f5-9663-55e32a559362",
    permissao_id: "bd3c812e-7062-425c-b98e-5ea9ce8b69cb",

  },
  {
    id: 3,
    role_id: "9c79b059-33cb-42a6-b455-169a49841748",
    permissao_id: "32acf530-f572-4b65-945c-4d74d8407ee4",

  }]

  let usuario_permissoesList = [{
    id: 1,
    usuario_id: "10ae95e7-459b-4471-aa16-1a8161e32c2c",
    permissao_id: "32acf530-f572-4b65-945c-4d74d8407ee4",
  },
  {
    id: 2,
    usuario_id: "e0b40af2-0472-481a-be01-de0cf79bebdb",
    permissao_id: "bd3c812e-7062-425c-b98e-5ea9ce8b69cb",

  },
  {
    id: 3,
    usuario_id: "b029ef54-d814-4898-ac36-bc47d81438be",
    permissao_id: "70dfcf9f-74db-4de1-a9e0-b2ef83364496",

  },
  {
    id: 4,
    usuario_id: "97807d8f-1276-4355-9e16-3b3ec5468bff",
    permissao_id: "70dfcf9f-74db-4de1-a9e0-b2ef83364496",

  },
  {
    id: 5,
    usuario_id: "1f9238ae-9286-4cf5-80eb-d7859e03c1f7",
    permissao_id: "70dfcf9f-74db-4de1-a9e0-b2ef83364496",

  }]

  let usuario_rolesList = [{
    id: 1,
    usuario_id: "10ae95e7-459b-4471-aa16-1a8161e32c2c",
    role_id: "9c79b059-33cb-42a6-b455-169a49841748",

  },
  {
    id: 2,
    usuario_id: "e0b40af2-0472-481a-be01-de0cf79bebdb",
    role_id: "6761f2b8-bdf4-42f5-9663-55e32a559362",

  },
  {
    id: 3,
    usuario_id: "b029ef54-d814-4898-ac36-bc47d81438be",
    role_id: "a2807e26-3c3a-4500-ad2b-83c2560f0434",

  },
  {
    id: 4,
    usuario_id: "97807d8f-1276-4355-9e16-3b3ec5468bff",
    role_id: "a2807e26-3c3a-4500-ad2b-83c2560f0434",

  },
  {
    id: 5,
    usuario_id: "1f9238ae-9286-4cf5-80eb-d7859e03c1f7",
    role_id: "a2807e26-3c3a-4500-ad2b-83c2560f0434",

  }]

  let lbets = []
  let lpermisoes = []
  let lroles_permissoes = []
  let lroles = []
  let lusuarios_permissoes = []
  let lusuarios_roles = []
  let lusuarios = []
  let lwallets = []

  for (let i = 0; i < permissoesList.length; i++) {
    const permissao = permissoesList[i]
    const role = roleList[i]
    const role_permissao = roles_permissoesList[i]

    const createdRoles = await database.roles.create(role)
    const createdPermissao = await database.permissoes.create(permissao)
    const createdRolePermissao = await database.roles_permissoes.create(role_permissao)


    lpermisoes.push(createdPermissao)
    lroles.push(createdRoles)
    lroles_permissoes.push(createdRolePermissao)

  }


  for (let i = 0; i < usuariosList.length; i++) {
    const user = usuariosList[i]
    const bets = betList[i]
    const wallet = walletList[i]
    const usuario_permissao = usuario_permissoesList[i]
    const usuario_role = usuario_rolesList[i]

    const createdUser = await database.usuarios.create(user)
    const createdBet = await database.bets.create(bets)
    const createdWallet = await database.wallets.create(wallet)
    const creatUsuarioPermissao = await database.usuarios_permissoes.create(usuario_permissao)
    const createUsuarioRole = await database.usuarios_roles.create(usuario_role)

    lusuarios.push(createdUser)
    lbets.push(createdBet)
    lwallets.push(createdWallet)
    lusuarios_permissoes.push(creatUsuarioPermissao)
    lusuarios_roles.push(createUsuarioRole)
  }



  res.json({
    status: true, usuariosList: lusuarios, betList: lbets, walletList: lwallets, lpermisoes: permissoesList, lroles: roleList, lroles_permissoes: roles_permissoesList, lusuarios_permissoes: usuario_permissoesList, lusuarios_roles: usuario_rolesList
  })
})

module.exports = router