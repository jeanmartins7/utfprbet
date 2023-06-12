'use strict';
module.exports = (sequelize, DataTypes) => {
  const bets = sequelize.define('bets', {
    valor: DataTypes.FLOAT,
    disciplina: DataTypes.STRING,
    chute: DataTypes.STRING
  }, {});
  bets.associate = function(models) {
    // associations can be defined here
  };
  return bets;
};