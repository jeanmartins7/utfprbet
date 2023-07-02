const walletsData = require('../models/wallets');

class WalletsService {
  static async getAllWallets(limite, pagina) {
    const valoresPermitidos = [5, 10, 30];
    const limiteValido = valoresPermitidos.includes(Number(limite));

    if (!limiteValido) {
      throw new Error('O valor do limite não é válido.');
    }

    const offset = (pagina - 1) * limite;
    try {
      const todasWallets = await walletsData.findAndCountAll({
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
      const wallet = await walletsData.findOne({
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
      const novaWalletCriada = await walletsData.create({
        id: uuid.v4(),
        usuario_id: novaWallet.usuario_id,
        saldo: novaWallet.saldo,
        pix: novaWallet.pix
      });
      return novaWalletCriada;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateWallet(id, novosDadosWallet) {
    try {
      await walletsData.update(novosDadosWallet, {
        where: {
          id: Number(id),
        },
      });
      const walletAtualizada = await walletsData.findOne({
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
      await walletsData.destroy({
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
      await walletsData.update(novosDadosWallet, {
        where: {
          id: Number(id),
        },
      });
      const walletAtualizada = await walletsData.findOne({
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
