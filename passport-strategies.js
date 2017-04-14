'use strict'

const passport = require('passport');
const {Strategy} = require('passport-local');
const {knex} = require('./db/database.js');
const {User} = require('./models/userMd.js');

passport.serializeUser((user, done)=> done(null, user.id));

passport.deserializeUser((id, done)=>{
  knex('users').where({id}).first()
  .then((user)=>{done(null, user)})
  .catch((err)=>{done(err, null)})
});

const localStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
  },

  (email, passwordStr, done) => {
    User.findOneByEmail(email)
    .then((user)=>{
      if (user) {
        return Promise.all([user, user.comparePassword(passwordStr)])
      }
      done(null, null, {msg: `You're not in our system yet.  Try creating an account`})
    })
    .then(([user, matches]) => {
      if (matches) {
        done(null, user, {msg: `Welcome back!`})
      } else {
        console.log("nope, matches = false")
        done(null, null, {msg: `That password doesn't match our records...`})
      }
    })
  .catch(done)
  }
);


passport.use(localStrategy);
