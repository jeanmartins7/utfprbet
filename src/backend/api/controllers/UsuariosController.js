const UsuariosService = require('../services/UsuariosService');
const isAdmin = require('../middleware/isAdmin')

class UsuariosController {
  static async getAllUsuarios(req, res) {
    const { limite = 10, pagina = 1 } = req.query;

    try {
      const todosUsuarios = await UsuariosService.getAllUsuarios(limite, pagina);
      return res.status(200).json(todosUsuarios);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async getOneUsuario(req, res) {
    const { id } = req.params;
    try {
      const usuario = await UsuariosService.getOneUsuario(id);
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async createUsuario(req, res) {
    const novoUsuario = req.body;
    try {
      const novoUsuarioCriado = await UsuariosService.createUsuario(novoUsuario);
      return res.status(200).json(novoUsuarioCriado);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async createUsuarioADM(req, res) {
    const novoUsuario = req.body;
    try {
      const novoUsuarioCriado = await UsuariosService.createUsuarioADM(novoUsuario);
      return res.status(200).json(novoUsuarioCriado);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async updateUsuario(req, res) {
    const { id } = req.params;
    const novosDadosUsuario = req.body;
    try {
      const usuarioAtualizado = await UsuariosService.updateUsuario(id, novosDadosUsuario);
      return res.status(200).json(usuarioAtualizado);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async deleteUsuario(req, res) {
    const { id } = req.params;
    try {
      await UsuariosService.deleteUsuario(id);
      return res.status(200).json({ message: 'Usuário deletado com sucesso.' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async updatePartialUsuario(req, res) {
    const { id } = req.params;
    const novosDadosUsuario = req.body;
    try {
      if (novosDadosUsuario.admin) {
        return res.status(401).json({ error: 'Não permitido.' });
      }
      const usuarioAtualizado = await UsuariosService.updatePartialUsuario(id, novosDadosUsuario);
      return res.status(200).json(usuarioAtualizado);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UsuariosController;
