'use strict'

const {Router} = require('express');
const {show} = require('./controllers/splashCtrl.js');

const splashRouter = Router();

splashRouter.get('/', show);

module.exports = splashRouter;
