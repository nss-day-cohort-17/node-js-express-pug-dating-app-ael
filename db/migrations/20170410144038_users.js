exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('users', table => {
	    table.increments();
	    table.string('email').notNullable().unique();
	    table.string('password').notNullable();
	    table.string('first_name').notNullable();
	    table.string('last_name').notNullable();
	    table.string('image').notNullable();
	    table.string('city').notNullable();
	    table.string('state').notNullable();
	    table.boolean('available').notNullable();

	    table.string('bio');
	    table.string('interests');
	    table.string('aversions');
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTable('users')
};
