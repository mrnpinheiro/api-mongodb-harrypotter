const express = require('express');
const router = express.Router();
const controller = require('../controllers/potter-controller')

router.get('/potter', controller.getPotter)

router.get('/potter/:id', controller.getPotterById)

router.post('/potter', controller.addPotter)

router.put('/potter/:id', controller.updatePotter)

router.delete('/potter/:id', controller.deletePotter)

module.exports = router;