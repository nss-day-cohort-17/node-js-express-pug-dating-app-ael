'use strict'

const { User } = require('../models/userMd')
const { Like } = require('../models/likesMd')

const CURRENT_USER_ID = 1

module.exports.show = (req, res) => {
	Promise.all([
		User.getCurrentUser(CURRENT_USER_ID),
		User.getUsers()
	]).then(values => {
		const [currentUser, users] = values
		res.render('home', {page: 'Home', users, currentUser})
	})
}

module.exports.create = (req, res) => {
	console.log('req.body:', req.body)
	res.end()
}
