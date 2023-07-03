const { v4: uuidv4 } = require('uuid');
const { DataTypes } = require('sequelize');
const sequelize = require('../services/SequelizeService');

const bets = sequelize.define('bets', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  disciplina: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  usuario_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  chute: {
    type: DataTypes.STRING,
    defaultValue: false
  }
});

module.exports = bets;