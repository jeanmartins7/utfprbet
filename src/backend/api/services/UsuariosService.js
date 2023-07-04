const usuarioData = require("../models/usuarios")
const walletData = require("../models/wallets")
const { hash } = require('bcryptjs');
const uuid = require('uuid');

class UsuariosService {
  static async getAllUsuarios(limite, pagina) {
    const valoresPermitidos = [5, 10, 30];
    const limiteValido = valoresPermitidos.includes(Number(limite));

    if (!limiteValido) {
      throw new Error('O valor do limite não é válido.');
    }

    const offset = (pagina - 1) * limite;
    try {
      const todosUsuarios = await usuarioData.findAndCountAll({
        limit: Number(limite),
        offset: offset
      });
      return todosUsuarios;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getOneUsuario(id) {
    try {
      const usuario = await usuarioData.findOne({
        where: {
          id: String(id)
        }
      });
      return usuario;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createUsuario(novoUsuario) {
    const { email } = novoUsuario;

    const usuarioExistente = await usuarioData.findOne({
      where: {
        email: email
      }
    });

    if (usuarioExistente) {
      throw new Error('Email já cadastrado. Por favor, escolha outro email.');
    }

    try {

      const senhaHash = await hash(novoUsuario.senha, 8)

      const [novoUsuarioCriado] = await Promise.all([
        usuarioData.create({
          id: uuid.v4(),
          nome: novoUsuario.nome,
          email: novoUsuario.email,
          senha: senhaHash,
          admin: novoUsuario.admin,
          wallet: {
            id: uuid.v4(),
            saldo: 0,
            pix: uuid.v4()
          }
        }, {
          include: [{
            model: walletData,
            as: 'wallet'
          }]
        })
      ]);

      return novoUsuarioCriado;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createUsuarioADM(novoUsuario) {
    const { email } = novoUsuario;

    const usuarioExistente = await usuarioData.findOne({
      where: {
        email: email
      }
    });

    if (usuarioExistente) {
      throw new Error('Email já cadastrado. Por favor, escolha outro email.');
    }

    try {

      const senhaHash = await hash(novoUsuario.senha, 8)

      const [novoUsuarioCriado] = await Promise.all([
        usuarioData.create({
          id: uuid.v4(),
          nome: novoUsuario.nome,
          email: novoUsuario.email,
          senha: senhaHash,
          admin: true,
          wallet: {
            id: uuid.v4(),
            saldo: 0,
            pix: uuid.v4()
          }
        }, {
          include: [{
            model: walletData,
            as: 'wallet'
          }]
        })
      ]);


      return novoUsuarioCriado;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateUsuario(id, novosDadosUsuario) {
    try {
      const senhaHash = await hash(novosDadosUsuario.senha, 8)
      novosDadosUsuario.senha = senhaHash;
      await usuarioData.update(novosDadosUsuario, {
        where: {
          id: String(id)
        }
      });
      const usuarioAtualizado = await usuarioData.findOne({
        where: {
          id: String(id)
        }
      });
      return usuarioAtualizado;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteUsuario(id) {
    try {
      await usuarioData.destroy({
        where: {
          id: String(id)
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updatePartialUsuario(id, novosDadosUsuario) {
    try {
      const senhaHash = await hash(novosDadosUsuario.senha, 8)
      novosDadosUsuario.senha = senhaHash;
      await usuarioData.update(novosDadosUsuario, {
        where: {
          id: String(id)
        }
      });
      const usuarioAtualizado = await usuarioData.findOne({
        where: {
          id: String(id)
        }
      });
      return usuarioAtualizado;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = UsuariosService;
