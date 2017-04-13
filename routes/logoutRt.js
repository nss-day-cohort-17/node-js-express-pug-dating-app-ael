'use strict'

const { Router } = require('express');
const { destroy, show } = require('../controllers/logoutCtrl.js');

const logoutRouter = Router();

logoutRouter.get('/logout-confirm', show);
logoutRouter.get('/logout', destroy)

module.exports = logoutRouter;
