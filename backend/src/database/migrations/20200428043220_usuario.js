exports.up = function(knex) {
    return knex.schema.createTable('usuario', function(table){
      table.increments('id').primary();

      table.string("nome").notNullable();
      table.string("email").unique().notNullable();
      table.string("senha").notNullable();

      table.integer('tipo_usuario').notNullable();
      table.foreign('tipo_usuario').references('id').inTable('tipoUsuario');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('usuario');
  };
  