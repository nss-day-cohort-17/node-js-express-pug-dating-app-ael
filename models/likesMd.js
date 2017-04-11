'use strict'

const { bookshelf } = require('../db/database.js');

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
	findLikedUsers: function(id) {
		return Like.forge().query({where: {user_id: currentUser}}).fetchAll({withRelated: ['user']})
		.then((users)=>{
			users.forEach(user => console.log(user.toJSON()))
			return users;
		})

	}
}
)
bookshelf.model('Like', Like)

module.exports = {Like}
