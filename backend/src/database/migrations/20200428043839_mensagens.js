exports.up = function(knex) {
    return knex.schema.createTable('mensagem', function(table){
      table.increments('id').primary();

      table.string("msg").notNullable();
      table.timestamps();

      table.integer('id_usuario').notNullable();
      table.foreign('id_usuario').references('id').inTable('usuario');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('mensagem');
  };
  