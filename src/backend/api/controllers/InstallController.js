const InstallService = require('../services/installService')
class InstallController {
    static async getInstall(req, res) {
 
        try {
          const seed = await InstallService.getInstall();
          return res.status(200).json(seed);
        } catch (error) {
          return res.status(400).json({ error: error.message });
        }
      }
}

module.exports = InstallController