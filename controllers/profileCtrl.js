'use strict'

const { User } = require('../models/userMd')

module.exports.show = (req, res) => {
	const {userId} = req.params
	User.getUserById(userId).then(user => {
		res.render('profile', {user})
	})
}
