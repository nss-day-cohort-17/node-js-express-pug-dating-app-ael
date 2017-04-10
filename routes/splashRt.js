'use strict'

const {Router} = require('express');
const {show} = require('../controllers/splashCtrl');

const splashRouter = Router();

splashRouter.get('/', show);

module.exports = splashRouter;
