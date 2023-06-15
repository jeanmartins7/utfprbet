const WalletsService = require('../services/WalletsService');

class WalletsController {
  static async getAllWallets(req, res) {
    const { limite = 10, pagina = 1 } = req.query;

    try {
      const todasWallets = await WalletsService.getAllWallets(limite, pagina);
      return res.status(200).json(todasWallets);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async getOneWallet(req, res) {
    const { id } = req.params;
    try {
      const wallet = await WalletsService.getOneWallet(id);
      return res.status(200).json(wallet);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async createWallet(req, res) {
    const novaWallet = req.body;
    try {
      const novaWalletCriada = await WalletsService.createWallet(novaWallet);
      return res.status(200).json(novaWalletCriada);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async updateWallet(req, res) {
    const { id } = req.params;
    const novosDadosWallet = req.body;
    try {
      const walletAtualizada = await WalletsService.updateWallet(id, novosDadosWallet);
      return res.status(200).json(walletAtualizada);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async deleteWallet(req, res) {
    const { id } = req.params;
    try {
      await WalletsService.deleteWallet(id);
      return res.status(200).json({ message: 'Wallet deletada com sucesso.' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async updatePartialWallet(req, res) {
    const { id } = req.params;
    const novosDadosWallet = req.body;
    try {
      const walletAtualizada = await WalletsService.updatePartialWallet(id, novosDadosWallet);
      return res.status(200).json(walletAtualizada);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = WalletsController;
