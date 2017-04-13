'use strict'

const { Router } = require('express');
const { destroy } = require('../controllers/logoutCtrl.js');

const logoutRouter = Router();

logoutRouter.get('/logout', destroy);

module.exports = logoutRouter;
