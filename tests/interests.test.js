import request from 'supertest'
import { app, knex } from '../src/app'

beforeAll(async () => {
  await knex.migrate.latest()
})

beforeEach(async () => {
  await knex.seed.run()
})

afterAll(async () => {
  await knex.migrate.rollback()
  await knex.destroy()
})

describe('Interests', () => {
  test('List of interests', async () => {
    const response = await request(app.callback()).get('/interests')

    expect(response.status).toBe(200)
  })
})
