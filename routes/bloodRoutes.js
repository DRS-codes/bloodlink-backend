const express = require('express');
const router = express.Router();
const bloodController = require('../controllers/bloodController');

// CRUD Routes
router.post('/', bloodController.addBlood);
router.get('/', bloodController.getBlood);
router.put('/:id', bloodController.updateBlood);
router.delete('/:id', bloodController.deleteBlood);

module.exports = router;
