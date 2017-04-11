'use strict'

const {Router} = require('express');
const {show} = require('../controllers/loginCtrl');

const loginRouter = Router();

loginRouter.get('/login', show);

module.exports = loginRouter;
