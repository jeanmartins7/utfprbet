'use strict';
module.exports = (sequelize, DataTypes) => {
  const wallets_usuarios = sequelize.define('wallets_usuarios', {
    wallet_id: DataTypes.UUID,
    usuario_id: DataTypes.UUID
  }, {});
  wallets_usuarios.associate = function(models) {
    // associations can be defined here
  };
  return wallets_usuarios;
};