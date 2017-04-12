'use strict'

const { bookshelf } = require('../db/database.js');
const { User } = require('./userMd');
const currentUser = 1;

// Todo: add foreign key relationship to model
const Like = bookshelf.Model.extend({
	tableName: 'likes',

	user: function() {
		// The primary key in the user table belongs
		// to the user_id in this table
		return this.belongsTo('User', 'user_id')
	},

	likedUser: function() {
		// The primary key in user table belongs
		// to liked_user_id in this table
		return this.belongsTo('User', 'liked_user_id')
	}
},
{
	findLikedUsers: function(user_id) {
		return Like.forge().query({where: {user_id}}).fetchAll({withRelated: ['likedUser']})
		.then((users)=>{
			let likedUserArray = users.map(user => user.related('likedUser').toJSON());
			return likedUserArray;
		})
		.catch(()=>{
			console.log('catch in the findLikedUser');
			return (null);
		})
	},
	// Sees if like exists for given user_id and liked_user_id
	// Returns promise that resolves to true or false
	seeIfLikeExists: function(user_id, liked_user_id) {
		return Like.forge().query({where: {user_id, liked_user_id}}).fetch()
		.then(data => {return (data ? true : false)})
	},
	addLike: function(user_id, liked_user_id) {
		return Like.forge({user_id, liked_user_id}).save()
			.then(data => data)
	}
})
bookshelf.model('Like', Like)

module.exports = {Like}
