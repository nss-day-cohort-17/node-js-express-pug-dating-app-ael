'use strict'

const {Router} = require('express');
const {show, create	} = require('../controllers/homeCtrl.js');

const homeRouter = Router();


homeRouter.get('/home', show);
homeRouter.post('/home', create);


module.exports = homeRouter;
