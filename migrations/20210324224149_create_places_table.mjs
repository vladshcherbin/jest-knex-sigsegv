export function up(knex) {
  return knex.schema.createTable('places', (table) => {
    table.increments('id')
    table.string('title').notNullable()
    table.string('address').notNullable()
    table.timestamp('created_at').notNullable()
    table.timestamp('updated_at').notNullable()

    table.unique(['title', 'address'])
  })
}

export function down(knex) {
  return knex.schema.dropTable('places')
}
