'use strict'

const {Router} = require('express');
const {show, create} = require('../controllers/registrationCtrl.js');

const registrationRouter = Router();

registrationRouter.get('/registration', show);
registrationRouter.post('/registration', create);

module.exports = registrationRouter;
