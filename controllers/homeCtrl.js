'use strict'

const { User } = require('../models/userMd')
const { Like } = require('../models/likesMd')

const CURRENT_USER_ID = 1

module.exports.show = (req, res) => {
	Promise.all([
		User.getCurrentUser(CURRENT_USER_ID),
		User.getUsers(),
		Like.findLikedUserIds(CURRENT_USER_ID)
	]).then(values => {
		const [currentUser, users, likedUserIds] = values
		res.render('home', {page: 'Home', users, currentUser, likedUserIds})
	})
}

module.exports.create = (req, res) => {
	console.log('req.body:', req.body)
	res.end()
}
