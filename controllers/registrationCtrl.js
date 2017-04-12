'use strict'

const User = require('../models/userMd.js');

module.exports.show = (req, res) => {
  res.render('registration', {page: 'Registration'});
}

module.exports.create = (req, res, err) => {
  User.forge(req.body)
  .save()
  .then(()=> {
    res.redirect('/home');
  })
  //if it doesn't work
  .catch(({err}) => {
    Promise.resolve(err)
    .then((err)=> {
      let body = req.body;
      res.render('registration', {page: 'Registration', err, body})
    })
  })
  .catch(err);
}
