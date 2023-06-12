'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('usuarios', [{
      id: "10ae95e7-459b-4471-aa16-1a8161e32c2c",
      usuario_id: "10ae95e7-459b-4471-aa16-1a8161e32c2c",
      nome: "joao",
      email: "joao@gmail.com",
      senha: "1234",
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      id: "e0b40af2-0472-481a-be01-de0cf79bebdb",
      usuario_id: "e0b40af2-0472-481a-be01-de0cf79bebdb",
      nome: "maria",
      email: "maria@gmail.com",
      senha: "1234",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "b029ef54-d814-4898-ac36-bc47d81438be",
      usuario_id: "b029ef54-d814-4898-ac36-bc47d81438be",
      nome: "ana",
      email: "ana@gmail.com",
      senha: "1234",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "97807d8f-1276-4355-9e16-3b3ec5468bff",
      usuario_id: "97807d8f-1276-4355-9e16-3b3ec5468bff",
      nome: "gabriel",
      email: "gabriel@gmail.com",
      senha: "1234",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "1f9238ae-9286-4cf5-80eb-d7859e03c1f7",
      usuario_id: "1f9238ae-9286-4cf5-80eb-d7859e03c1f7",
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
