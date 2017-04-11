'use strict'

const { User } = require('../models/userMd')

// Returns array of user objects
const getUsers = () => {
	return User.forge().fetchAll()
		.then(models => models.toJSON())
}

module.exports.show = (req, res) => {
  getUsers().then(users => {
	  res.render('home', {page: 'Home', users})
  })
}
