exports.up = function(knex) {
    return knex.schema.createTable('tipoUsuario', function(table){
      table.increments('id').primary();
      table.string("tipo").notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('tipoUsuario');
  };
  