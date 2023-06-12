'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bets', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID, 
        defaultValue: Sequelize.UUID
      },
      valor: {
        type: Sequelize.FLOAT
      },
      disciplina: {
        type: Sequelize.STRING
      },
      chute: {
        type: Sequelize.STRING
      },
      usuario_id: {
        type: Sequelize.UUID, 
        defaultValue: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bets');
  }
};