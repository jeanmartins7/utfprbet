const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const bets = sequelize.define('bets', {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true
    },
    valor: DataTypes.FLOAT,
    disciplina: DataTypes.STRING,
    usuario_id: DataTypes.UUID,
    chute: DataTypes.STRING
  }, {});

  return bets;
};