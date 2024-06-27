/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('teas', function(table) {
        table.increments('id').primary();
        table.string('name');
        table.string('slug');
        table.string('image');
        table.string('origin');
        table.string('type');
        table.string('caffeine');
        table.string('caffeineLevel');
        table.string('description');
        table.string('colorDescription');
        table.string('tasteDescription');

        table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable('teas')
};
