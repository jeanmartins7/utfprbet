'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuarios_permissoes = sequelize.define('usuarios_permissoes', {
    usuario_id: DataTypes.UUID,
    permissao_id: DataTypes.UUID
  }, {});
  usuarios_permissoes.associate = function(models) {
    // associations can be defined here
  };
  return usuarios_permissoes;
};