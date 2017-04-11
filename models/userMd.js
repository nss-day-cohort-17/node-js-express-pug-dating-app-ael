'use strict'

const { bookshelf } = require('../db/database.js')

// Todo: add bcrypt password hashing to model
// Todo: add find user by email method
// Todo: add compare password method
const User = bookshelf.Model.extend({
	tableName: 'users'
})
