const router = require('express').Router();
const medicinaController = require('../controllers/medicinaControllers');

router.get('/', medicinaController.getMedicinas);
router.post('/add', medicinaController.addMedicina);
router.put('/update/:id', medicinaController.updateMedicina);
router.delete('/delete/:id', medicinaController.deleteMedicina);


module.exports = router;