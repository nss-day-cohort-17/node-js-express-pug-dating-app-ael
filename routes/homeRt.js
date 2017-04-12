'use strict'

const {Router} = require('express');
const {show, create, remove	} = require('../controllers/homeCtrl.js');

const homeRouter = Router();


homeRouter.get('/home', show);
homeRouter.post('/home', create);
homeRouter.delete('/home', remove);


module.exports = homeRouter;
