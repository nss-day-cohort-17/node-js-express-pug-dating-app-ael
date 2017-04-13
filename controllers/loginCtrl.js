'use strict'

const passport = require('passport');

module.exports.show = (req, res) => {
  res.render('login', {page: "Login"});
}

module.exports.create = (req, res, next) =>
  passport.authenticate('local', (err, user, msg) => {
    console.log('trying to auth');
    if(err) return next(err);
    console.log('user', user)
    if(!user) return res.render('login', {msg, page: 'Login'})

    req.login(user, (err) => {
      console.log('trying to log in')
      if(err) return next(err)
      res.redirect('/home')
    })
})(req, res, next)
