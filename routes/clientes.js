const router = require('express').Router();
const clienteController = require('../controllers/clientesController');

router.get('/', clienteController.getClientes);
router.get('/:nombre', clienteController.getClienteByNombre);
router.post('/add', clienteController.addCliente);
router.put('/update/:id', clienteController.updateCliente);
router.delete('/delete/:id', clienteController.deleteCliente);

module.exports = router;