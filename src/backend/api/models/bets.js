'use strict';
module.exports = (sequelize, DataTypes) => {
  const bets = sequelize.define('bets', {
    valor: DataTypes.FLOAT,
    disciplina: DataTypes.STRING,
    chute: DataTypes.STRING
  }, {});
  bets.associate = function(models) {
    bets.belongsToMany(models.usuarios, {
      through: models.bets_usuarios,
      as: 'bets_do_usuario',
      foreignKey: 'bet_id'
    })
  };
  return bets;
};