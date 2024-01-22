/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('ingredients', table => {
        table.increments('ingredients_id').primary;
        table.string('name');
        table.integer('measure_id');
        table.foreign('measure_id').references('measures.id');
        table.string('image')
})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('ingredients', table => {
        table.dropForeign('measure_id')
      })
      .then(function(){
        return knex.schema.dropTableIfExists('ingredients')
      })
    };
