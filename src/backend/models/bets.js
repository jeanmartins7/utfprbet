'use strict';
module.exports = (sequelize, DataTypes) => {
  const bets = sequelize.define('bets', {
    valor: DataTypes.FLOAT,
    disciplina: DataTypes.STRING,
    chute: DataTypes.STRING
  }, {});
  bets.associate = function(models) {
    bets.belongsTo(models.usuarios, { foreignKey: 'usuario_id' });
  };
  return bets;
};