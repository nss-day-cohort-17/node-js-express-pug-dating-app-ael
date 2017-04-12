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
		console.log('find users I liked!')
		return Like.forge().query({where: {user_id}}).fetchAll({withRelated: ['likedUser']})
		.then((users)=>{
			console.log('users in the THEN with get', users.get('likedUser'))
			users.forEach(user => console.log(users.toJSON()))
			return users.toJSON();
		})
		.catch(()=>{
			console.log('catch in the findLikedUser');
			return (null);
		})

	}
}
)
bookshelf.model('Like', Like)

module.exports = {Like}
