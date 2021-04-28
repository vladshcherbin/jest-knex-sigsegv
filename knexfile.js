export default {
  client: 'pg',
  connection: 'postgres://localhost/jest_knex_sigsegv',
  migrations: {
    loadExtensions: ['.mjs']
  },
  seeds: {
    loadExtensions: ['.mjs']
  }
}
