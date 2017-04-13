'use strict'

const { bookshelf } = require('../db/database.js');
const {compare} = require('bcryptjs');


// Todo: add bcrypt password hashing to model
// Todo: add find user by email method
// Todo: add compare password method
const User = bookshelf.Model.extend({
	tableName: 'users',
	bcrypt: {field: 'password'},
	comparePassword : function (passwordStr) {
		console.log('this', this);
		console.log('passwordStr', passwordStr);
		return compare(passwordStr, this.attributes.password);
	},

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
	},
	//take an argument of email
	//returns a user that matches that email
	findOneByEmail: function(email) {
		return User.forge({email}).fetch()
			.then((user)=> {
				return user;
			})
			.catch(()=>{
				return null;
			})
	}

})
bookshelf.model('User', User)

module.exports = {User}
