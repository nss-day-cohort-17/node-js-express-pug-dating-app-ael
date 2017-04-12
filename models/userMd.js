'use strict'

const { bookshelf } = require('../db/database.js')

// Todo: add bcrypt password hashing to model
// Todo: add find user by email method
// Todo: add compare password method
const User = bookshelf.Model.extend({
	tableName: 'users',

	userIds: function() {
		// The primary key in this table belongs
		// to the user_id in the likes table
		return this.hasMany('Like', 'user_id')
	},

	likedUserIds: function() {
		// The primary key in this table belongs
		// to the liked_user_id in the likes table
		return this.hasMany('Like', 'liked_user_id')
	}
}, {
	// Returns promise that resolves with array of users
	getUsers: function() {
		return User.forge().fetchAll().then(models => models.toJSON())
	},

	// Takes argument of a user id
	// Returns promise that resolves with user object
	getCurrentUser: function(id) {
		return User.forge().query({where: {id}}).fetch()
			.then(model => model.toJSON())
	}
})
bookshelf.model('User', User)

module.exports = {User}







