exports.up = function(knex, Promise) {
  return knex.schema
	  .createTable('likes', function(table){
	    table.integer('user_id').notNullable();
	    table.integer('liked_user_id').notNullable();

	    table.foreign('user_id').references('users.id');
	    table.foreign('liked_user_id').references('users.id');
	  })
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTable('likes')
};
