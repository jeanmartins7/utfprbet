const database = require('../models');

class WalletsController {
  static async pegaTodasWallets(req, res) {
    const { limite = 10, pagina = 1 } = req.query;
  

    const valoresPermitidos = [5, 10, 30];
    const limiteValido = valoresPermitidos.includes(Number(limite));
    if (!limiteValido) {
      return res.status(400).json({ error: 'O valor do limite não é válido.' });
    }
  
    const offset = (pagina - 1) * limite;
    try {
      const todasWallets = await database.wallets.findAndCountAll({
        limit: Number(limite),
        offset: offset
      });
      return res.status(200).json(todasWallets);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmaWallet(req, res) {
    const { id } = req.params;
    try {
      const wallet = await database.wallets.findOne({
        where: {
          id: Number(id)
        }
      });
      return res.status(200).json(wallet);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaWallet(req, res) {
    const novaWallet = req.body;
    try {
      const novaWalletCriada = await database.wallets.create(novaWallet);
      return res.status(200).json(novaWalletCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaWallet(req, res) {
    const { id } = req.params;
    const novosDadosWallet = req.body;
    try {
      await database.wallets.update(novosDadosWallet, {
        where: {
          id: Number(id),
        },
      });
      const walletAtualizada = await database.wallets.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(walletAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletaWallet(req, res) {
    const { id } = req.params;
    try {
      await database.wallets.destroy({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json({ message: 'Wallet deletada com sucesso.' });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaParcialWallet(req, res) {
    const { id } = req.params;
    const novosDadosWallet = req.body;
    try {
      await database.wallets.update(novosDadosWallet, {
        where: {
          id: Number(id),
        },
      });
      const walletAtualizada = await database.wallets.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(walletAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = WalletsController;
