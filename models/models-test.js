'use strict'

// Examples for how to use the bookshelf models
// Simply run node models/models-test to run them

const {User} = require('./userMd')
const {Like} = require('./likesMd')

// Fetch all users with related rows on likes table where they are
// the liker or liked person
User.forge().fetchAll({withRelated: ['likedUserIds', 'userIds']})
	.then(models => {
		models.forEach(model => console.log(model.toJSON()))
	})

// Fetch all items on like table and also retreive the user info
// for both the user and the person they liked
Like.forge().fetchAll({withRelated: ['user', 'likedUser']})
	.then(models => {
		models.forEach(model => console.log(model.toJSON()))
	})

// Either query can be refined with the .query() method before fetch
// to just retreive a user with an id of [whatever]
