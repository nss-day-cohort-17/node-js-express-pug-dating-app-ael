'use strict'

const passport = require('passport');

module.exports.show = (req, res) => {
  res.render('login', {page: "Login"});
}

module.exports.create = (req, res, next) =>
  passport.authenticate('local', (err, user, msg) => {
    if(err) return next(err);
    let body = req.body
    console.log('msg', msg)
    if(!user) return res.render('login', {msg, page: 'Login', body})

    req.login(user, (err) => {
      console.log("err for login", err)
      if(err) return next(err)
      res.redirect('/home')
    })
  })(req, res, next)
