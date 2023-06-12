'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('usuarios', [{
      usuario_id: 1,
      nome: "joao",
      email: "joao@gmail.com",
      senha: "1234",
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      usuario_id: 2,
      nome: "maria",
      email: "maria@gmail.com",
      senha: "1234",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      usuario_id: 3,
      nome: "ana",
      email: "ana@gmail.com",
      senha: "1234",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      usuario_id: 4,
      nome: "gabriel",
      email: "gabriel@gmail.com",
      senha: "1234",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      usuario_id: 5,
      nome: "pedro",
      email: "pedro@gmail.com",
      senha: "1234",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('usuarios', null, {});
  }
};
