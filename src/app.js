import knex from 'knex'
import Koa from 'koa'
import Router from '@koa/router'
import knexfile from '../knexfile'

const knexConnection = knex(knexfile)
const app = new Koa()
const router = new Router()

router
  .get('/interests', async (ctx) => {
    ctx.body = {
      interests: await knexConnection('interests')
    }
  })
  .get('/places', async (ctx) => {
    ctx.body = {
      places: await knexConnection('places')
    }
  })

app.use(router.routes())

export {
  app,
  knexConnection as knex
}
