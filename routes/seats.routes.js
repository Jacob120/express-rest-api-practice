const express = require('express');
const router = express.Router();

const SeatController = require('../controllers/seats.controllers');

router.route('/seats').get(SeatController.getAll);

router.route('/seats/random').get(SeatController.getRandom);

router.route('/seats/:id').get(SeatController.getById);

router.route('/seats').post(SeatController.postOne);

router.route('/seats/:id').put(SeatController.putOne);

router.route('/seats/:id').delete(SeatController.deleteById);

module.exports = router;
