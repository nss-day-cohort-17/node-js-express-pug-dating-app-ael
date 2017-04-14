'use strict'

const {Router} = require('express');
const {show} = require('../controllers/profileCtrl.js');

const profileRouter = Router();

profileRouter.get('/profile/:userId', show);

module.exports = profileRouter;
