'use strict'

const { User } = require('../models/userMd')
const { Like } = require('../models/likesMd')



module.exports.show = (req, res) => {
	let CURRENT_USER_ID = req.user.id;
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
	let CURRENT_USER_ID = req.user.id;
	const {liked_user_id} = req.body
	Like.forge({user_id: CURRENT_USER_ID, liked_user_id}).save()
		.then(model => {
			res.end()
		}).catch(err => console.log(err))
}

module.exports.remove = (req, res) => {
	let CURRENT_USER_ID = req.user.id;
	const {liked_user_id} = req.body
	console.log('delete happened')
	Like.forge({user_id: CURRENT_USER_ID, liked_user_id})
	.query({where: {user_id: CURRENT_USER_ID, liked_user_id}})
	.destroy()
		.then(model => {
			console.log('row deleted from database')
			res.end()
		})
}
