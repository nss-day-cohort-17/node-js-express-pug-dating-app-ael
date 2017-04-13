'use strict'

const {Router} = require('express');
const {show, create} = require('../controllers/loginCtrl');

const loginRouter = Router();

loginRouter.get('/login', show);

loginRouter.post('/login', create);

module.exports = loginRouter;
