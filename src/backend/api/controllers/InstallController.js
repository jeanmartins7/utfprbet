const InstallService = require('../services/installService');

class InstallController {
  static async install(req, res) {
    const installService = new InstallService();

    try {
      await installService.createTables();
      await installService.populateTables();

      res.send('Instalação concluída com sucesso.');
    } catch (error) {
      console.error('Erro durante a instalação:', error);
      res.status(500).send('Erro durante a instalação.');
    }
  }
}

module.exports = InstallController;
