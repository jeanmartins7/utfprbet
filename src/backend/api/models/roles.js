'use strict';
const {
  Model
} = require('sequelize');

const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {

    static associate(models) {
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
    }
  }
  roles.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true
    },
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};