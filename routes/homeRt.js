'use strict'

const {Router} = require('express');
const {show} = require('controllers/homeCtrl.js');

const homeRouter = Router();


homeRouter.get('/home', show);


module.exports = homeRouter;
