const router = require('express').Router();
const categoriaController = require('../controllers/categoriaController');

router.get('/', categoriaController.getCategorias);
router.get('/:nombre', categoriaController.getCategoriaByNombre);

module.exports = router;