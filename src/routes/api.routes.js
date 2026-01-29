const express = require('express');

const router = express.Router();

const controller = require('../controllers/api.controller.js');

router.get('/data', controller.getData);

router.get( '/message', controller.getMessage);

router.post('/login', controller.loginUser);



module.exports = router;  