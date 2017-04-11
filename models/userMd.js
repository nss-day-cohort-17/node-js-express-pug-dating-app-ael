'use strict'

const { bookshelf } = require('../db/database.js')

const User = bookshelf.Model.extend({
	tableName: 'users'
})
