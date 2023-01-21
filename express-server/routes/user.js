const express = require('express');
const UserController = require('../controllers/user');
const applicationController = require('../controllers/user3');
const router = express.Router();

router.get('/alluser', UserController.findAll);
router.post('/', UserController.create);
router.post('/createapplication', applicationController.createApplication);
router.get('/getapplication', applicationController.findAll);

module.exports = router;