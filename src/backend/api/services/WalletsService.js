const database = require('../models');

class WalletsService {
  static async getAllWallets(limite, pagina) {
    const valoresPermitidos = [5, 10, 30];
    const limiteValido = valoresPermitidos.includes(Number(limite));

    if (!limiteValido) {
      throw new Error('O valor do limite não é válido.');
    }

    const offset = (pagina - 1) * limite;
    try {
      const todasWallets = await database.wallets.findAndCountAll({
        limit: Number(limite),
        offset: offset
      });
      return todasWallets;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getOneWallet(id) {
    try {
      const wallet = await database.wallets.findOne({
        where: {
          id: Number(id)
        }
      });
      return wallet;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createWallet(novaWallet) {
    try {
      const novaWalletCriada = await database.wallets.create(novaWallet);
      return novaWalletCriada;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateWallet(id, novosDadosWallet) {
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
      return walletAtualizada;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteWallet(id) {
    try {
      await database.wallets.destroy({
        where: {
          id: Number(id),
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updatePartialWallet(id, novosDadosWallet) {
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
      return walletAtualizada;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = WalletsService;
