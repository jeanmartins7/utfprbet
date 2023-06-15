const { Sequelize } = require('sequelize');
const models = require('../models');
const { bets } = require('../models/bets');
require('dotenv').config();

class InstallService {
  constructor() {
    this.sequelize = new Sequelize(
      process.env.DB_DATABASE,
      process.env.DB_USERNAME,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
      }
    );
  }

  async createTables() {
    try {
      await models.sequelize.sync({ force: true });
      console.log('Tabelas criadas com sucesso.');
    } catch (error) {
      console.error('Erro ao criar as tabelas:', error);
      throw error;
    }
  }
  

  async populateTables() {
    const betsData = [
        { valor: 100.0, disciplina: 'EC38B - Programação para Web - C81', chute: 'APROVADO', usuario_id: '10ae95e7-459b-4471-aa16-1a8161e32c2c' },
        { valor: 100.0, disciplina: 'EC38B - Programação para Web - C81', chute: 'APROVADO', usuario_id: 'e0b40af2-0472-481a-be01-de0cf79bebdb' },
        { valor: 100.0, disciplina: 'EC38B - Programação para Web - C81', chute: 'APROVADO', usuario_id: 'b029ef54-d814-4898-ac36-bc47d81438be' },
        { valor: 100.0, disciplina: 'EC38B - Programação para Web - C81', chute: 'APROVADO', usuario_id: '97807d8f-1276-4355-9e16-3b3ec5468bff' },
        { valor: 100.0, disciplina: 'EC38B - Programação para Web - C81', chute: 'APROVADO', usuario_id: '1f9238ae-9286-4cf5-80eb-d7859e03c1f7' }
      ];

     
  }

  
  
}

module.exports = InstallService;
