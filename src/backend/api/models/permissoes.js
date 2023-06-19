'use strict';
module.exports = (sequelize, DataTypes) => {
  const permissoes = sequelize.define('permissoes', {
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {});
  permissoes.associate = function(models) {
    permissoes.belongsToMany(models.usuarios, {
      through: models.usuarios_permissoes,
      as: 'permissoes_do_usuario',
      foreignKey: 'permissao_id'
    })
    permissoes.belongsToMany(models.roles, {
      through: models.roles_permissoes,
      as: 'permissoes_das_roles',
      foreignKey: 'permissao_id'
    })
  };
  return permissoes;
};