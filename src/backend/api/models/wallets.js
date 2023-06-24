'use strict';
module.exports = (sequelize, DataTypes) => {
  const wallets = sequelize.define('wallets', {
    saldo: DataTypes.FLOAT,
    pix: DataTypes.STRING
  }, {});
  wallets.associate = function(models) {
    wallets.belongsTo(models.usuarios, {
      through: models.wallets_usuarios,
      as: 'wallet_do_usuario',
      foreignKey: 'wallet_id'
    })
  };
  return wallets;
};