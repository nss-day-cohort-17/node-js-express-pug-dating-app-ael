'use strict'

const {User} = require('../models/userMd.js');
const {knex, bookshelf} = require('../db/database.js');
const passport = require('passport');


module.exports.show = (req, res) => {
  res.render('registration', {page: 'Registration'});
}

module.exports.create = (req, res, err) => {

  let {body: {email, password, first_name, last_name, image, city, state, interests, aversions, bio}} = req;
  if (password !== req.body.password_confirm) {
    let body = req.body;
    let err = {};
    err.message = "passwords don't match!";
    res.render('registration', {page: 'Registration', err, body})
    return
  }
  let available = true;
  return User.forge({email, password, first_name, last_name, image, city, state, interests, aversions, bio, available
  })
  .save()
  .then(function (user) {
    req.login(user, (err) => {
      if (!err) {

        res.redirect('/home');
      } else {

        console.log(err);
      }
    })
  })
  //if it doesn't work
  .catch((err) => {

    Promise.resolve(err)
    .then((err)=> {

      let body = req.body;
      if(err.code === '23505') {
        err.message = 'That email is already in our system.  Please use our log in page.'
      } else {
        err.message = 'Oops, something went wrong.  Please review you form and try again.'
      }
      console.log(err)
      res.render('registration', {page: 'Registration', err, body})
    })
  })
  .catch((err)=>{console.log(err)});
}
