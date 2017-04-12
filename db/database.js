'use strict';

// This file configures our instance of bookshelf using
// info from the knexfile.js
// Exports configured bookshelf object

const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);

// Allows us to hash the users' passwords before saving them
// bookshelf.plugin(require('bookshelf-bcrypt'));
bookshelf.plugin('registry');

module.exports = { bookshelf, knex };
