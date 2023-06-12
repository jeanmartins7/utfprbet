'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('bets', [{
      id: "6e30d1b4-8b55-4bad-9d9c-036085b4020f",
      valor: 100.0,
      disciplina: "EC38B - Programação para Web - C81 ",
      chute: "APROVADO",
      usuario_id: "10ae95e7-459b-4471-aa16-1a8161e32c2c",
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      id: "25c7932a-ccf8-4a2f-9fda-5caa3156c302",
      valor: 100.0,
      disciplina: "EC38B - Programação para Web - C81 ",
      chute: "APROVADO",
      usuario_id: "e0b40af2-0472-481a-be01-de0cf79bebdb",
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: "2367a3da-c407-4b3d-a853-a257fe0dd9e1",
      valor: 100.0,
      disciplina: "EC38B - Programação para Web - C81 ",
      chute: "APROVADO",
      usuario_id: "b029ef54-d814-4898-ac36-bc47d81438be",
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: "9d8afbb3-5d5c-4f49-af31-3199c1b98b83",
      valor: 100.0,
      disciplina: "EC38B - Programação para Web - C81 ",
      chute: "APROVADO",
      usuario_id: "97807d8f-1276-4355-9e16-3b3ec5468bff",
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      id: "f6338859-1354-45e7-8fd3-a3b2e38fcf77",
      valor: 100.0,
      disciplina: "EC38B - Programação para Web - C81 ",
      chute: "APROVADO",
      usuario_id: "1f9238ae-9286-4cf5-80eb-d7859e03c1f7",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('bets', null, {});

  }
};
