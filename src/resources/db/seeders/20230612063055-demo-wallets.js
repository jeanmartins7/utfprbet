'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('wallets', [{
      saldo: 100.0,
      pix: "7ef6a6f3c30946b6b1e9a0923c9e5ddc",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      saldo: 100.0,
      pix: "7ef6a6f3c30946b6b1e9a0923c9e5ddc",      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      saldo: 100.0,
      pix: "7ef6a6f3c30946b6b1e9a0923c9e5ddc",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      saldo: 100.0,
      pix: "7ef6a6f3c30946b6b1e9a0923c9e5ddc",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      saldo: 100.0,
      pix: "7ef6a6f3c30946b6b1e9a0923c9e5ddc",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('wallets', null, {});

  }
};
