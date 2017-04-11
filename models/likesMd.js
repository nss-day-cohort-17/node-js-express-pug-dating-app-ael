'use strict'

const { bookshelf } = require('../db/database.js')

// Todo: add foreign key relationship to model
const Likes = bookshelf.Model.extend({
	tableName: 'likes'
})
