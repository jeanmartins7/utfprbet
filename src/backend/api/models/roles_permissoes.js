'use strict';
module.exports = (sequelize, DataTypes) => {
  const roles_permissoes = sequelize.define('roles_permissoes', {
    pole_id: DataTypes.UUID,
    permissao_id: DataTypes.UUID
  }, {});
  roles_permissoes.associate = function(models) {
    // associations can be defined here
  };
  return roles_permissoes;
};