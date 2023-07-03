const UsuariosService = require('../services/UsuariosService');

const isAdmin = () => {
    return async (req, res, next) => {
        const { usuarioId } = req
        console.log("entrou")
        try {

            const usuario = await UsuariosService.getOneUsuario(usuarioId);
            console.log(usuario)

            if (!usuario.admin) {
                return res.status(401).json({ mensagem: 'Acesso não autorizado' });
            }

            return next()
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

module.exports = isAdmin