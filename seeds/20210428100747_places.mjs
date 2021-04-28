/* eslint-disable import/prefer-default-export */
const places = [
  { title: 'place 1', address: 'address 1' },
  { title: 'place 2', address: 'address 2' },
  { title: 'place 3', address: 'address 3' }
]

export async function seed(knex) {
  const currentDate = new Date().toISOString()

  await knex.table('places').delete()
  await knex.table('places').insert(places.map((place) => ({
    title: place.title,
    address: place.address,
    created_at: currentDate,
    updated_at: currentDate
  })))
}
