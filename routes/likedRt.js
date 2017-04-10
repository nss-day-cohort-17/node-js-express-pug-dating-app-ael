'use strict'

const {Router} = require('express');
const {show} = require('../controllers/likedCtrl.js')

const likedRouter = Router();

likedRouter.get('/liked', show);

module.exports = likedRouter;
