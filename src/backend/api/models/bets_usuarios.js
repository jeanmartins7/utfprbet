'use strict';
module.exports = (sequelize, DataTypes) => {
  const bets_usuarios = sequelize.define('bets_usuarios', {
    bet_id: DataTypes.UUID,
    usuario_id: DataTypes.UUID
  }, {});
  bets_usuarios.associate = function(models) {
    // associations can be defined here
  };
  return bets_usuarios;
};