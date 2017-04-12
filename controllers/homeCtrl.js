'use strict'

const { User } = require('../models/userMd')

const CURRENT_USER_ID = 2



module.exports.show = (req, res) => {

	Promise.all([
		User.getCurrentUser(CURRENT_USER_ID),
		User.getUsers()
	]).then(values => {
		const [currentUser, users] = values
		res.render('home', {page: 'Home', users, currentUser})
	})
}
