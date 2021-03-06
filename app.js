'use strict'

require('dotenv').config()

const express = require('express')
// const path = require('path');
const app = express()
const routes = require('./routes/')
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const passport = require('passport');
const KnexSessionStore = require('connect-session-knex')(session);
const {knex} = require('./db/database');


const port = process.env.PORT || 3000

app.set('view engine', 'pug')


app.locals.body = {};
// Middleware
app.use(cookieParser('secretlove'));
app.use(session({cookie: {maxAge: 100000}, secret: 'secretlove', resave: true, saveUninitialized: false}))
app.use(flash());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  store: new KnexSessionStore({
    knex,
    tablename: 'sessions'
  }),
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET || 'secretlovesuperkey'
}));

//reauthenticate user on every request
require('./passport-strategies.js')
app.use(passport.initialize());
app.use(passport.session());


//adding an anymous fuct to middleware
app.use((req, res, next) => {
  //setting up true or false
  app.locals.email = req.user && req.user.email
  next()
})



app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(routes)

// Render 404 if no other route matched
app.use((req, res) => {
	res.render('404')
})

// Listen
app.listen(port, () => console.log(`listening on port ${port}`))
