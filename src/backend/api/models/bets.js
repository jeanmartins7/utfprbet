'use strict';
module.exports = (sequelize, DataTypes) => {
  const bets = sequelize.define('bets', {
    valor: DataTypes.FLOAT,
    disciplina: DataTypes.STRING,
    chute: DataTypes.STRING,
    usuario_id: DataTypes.UUID,
  }, {});
  bets.associate = function(models) {
  };
  return bets;
};