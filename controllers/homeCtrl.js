'use strict'

const { User } = require('../models/userMd')

module.exports.show = (req, res) => {
  User.getUsers().then(users => {
	  return res.render('home', {page: 'Home', users})
  }).catch(err => {
  	return res.render('home')
  })
}
