'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('bets', [{
      valor: 100.0,
      disciplina: "EC38B - Programação para Web - C81 ",
      chute: "APROVADO",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      valor: 100.0,
      disciplina: "EC38B - Programação para Web - C81 ",
      chute: "APROVADO",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      valor: 100.0,
      disciplina: "EC38B - Programação para Web - C81 ",
      chute: "APROVADO",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      valor: 100.0,
      disciplina: "EC38B - Programação para Web - C81 ",
      chute: "APROVADO",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      valor: 100.0,
      disciplina: "EC38B - Programação para Web - C81 ",
      chute: "APROVADO",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('bets', null, {});

  }
};
