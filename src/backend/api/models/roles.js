'use strict';
module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define('roles', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {});
  roles.associate = function(models) {
    roles.belongsToMany(models.usuarios, {
      through: models.usuarios_roles,
      as: 'roles_do_usuario',
      foreignKey: 'role_id'
    })
    roles.belongsToMany(models.permissoes, {
      through: models.roles_permissoes,
      as: 'roles_das_permissoes',
      foreignKey: 'role_id'
    })
  };
  return roles;
};