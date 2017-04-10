'use strict'

const {Router} = require('express');
const router = Router();

//public routes
router.use(require('./splashRt'));
router.use(require('./loginRt'));
router.use(require('./registrationRt'));



//guarded routes - check for auth first

router.use(require('./homeRt'));
router.use(require('./likedRt'));


module.exports = router;
