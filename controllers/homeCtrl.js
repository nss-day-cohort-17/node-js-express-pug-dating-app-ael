'use strict'

const { User } = require('../models/userMd')

// Returns promise that resolves with array of user objects
const getUsers = () => {
	return User.forge().fetchAll()
		.then(models => models.toJSON())
}

module.exports.show = (req, res) => {
  getUsers().then(users => {
	  return res.render('home', {page: 'Home', users})
  }).catch(err => {
  	return res.render('home')
  })
}
