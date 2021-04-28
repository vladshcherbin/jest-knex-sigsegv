/* eslint-disable import/prefer-default-export */
const interests = [
  { emoji: '🏭', title: 'Economics' },
  { emoji: '👩‍🏫', title: 'Education' },
  { emoji: '🔋', title: 'Energy' }
]

export async function seed(knex) {
  const currentDate = new Date().toISOString()

  await knex.table('interests').delete()
  await knex.table('interests').insert(interests.map((interest) => ({
    ...interest,
    created_at: currentDate,
    updated_at: currentDate
  })))
}
