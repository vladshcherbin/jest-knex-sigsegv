export function up(knex) {
  return knex.schema.createTable('interests', (table) => {
    table.increments('id')
    table.string('title').notNullable().unique()
    table.string('emoji').notNullable().unique()
    table.timestamp('created_at').notNullable()
    table.timestamp('updated_at').notNullable()
  })
}

export function down(knex) {
  return knex.schema.dropTable('interests')
}
