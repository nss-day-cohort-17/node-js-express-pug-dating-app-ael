'use strict'

const {Router} = require('express');
const router = Router();

//public routes
router.use(require('./splashRt'));
router.use(require('./loginRt'));
router.use(require('./registrationRt'));



//guarded routes - check for auth first

router.use((req, res, next)=>{
  if(req.isAuthenticated()){
    next();
  } else {
    res.redirect('/login')
  }
})



router.use(require('./logoutRt'))

router.use(require('./homeRt'));
router.use(require('./likedRt'));


module.exports = router;
