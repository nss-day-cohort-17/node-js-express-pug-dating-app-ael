'use strict'

const {Router} = require('express');
const {show} = require('./controllers/registrationCtrl.js');

const registrationRouter = Router();

registrationRouter.get('/registration', show);

module.exports = registrationRouter;
