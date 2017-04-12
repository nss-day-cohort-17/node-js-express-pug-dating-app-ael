'use strict'

const User = require('../models/userMd.js');
const {knex} = require('../db/database.js')

module.exports.show = (req, res) => {
  res.render('registration', {page: 'Registration'});
}

module.exports.create = (req, res, err) => {
  console.log("registration");
  User.forge(req.body)
  .save()
  .then(()=> {
    console.log("i've been saved!")
    res.redirect('/home');
  })
  //if it doesn't work
  .catch(({err}) => {
    console.log("something went wrong, I'm in the error");
    Promise.resolve(err)
    .then((err)=> {
      console.log(`I'm reloading the page!`)
      let body = req.body;
      res.render('registration', {page: 'Registration', err, body})
    })
  })
  .catch(err);
}
