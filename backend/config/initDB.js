const { Pool } = require('pg')
const { createUsersTable, createProductsTable, createOrdersTable, createProductImagesTable, createSellersTable } = require('./queries')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'amazon_clone',
  post: 5432
})

async function initDB () {
  await pool.query(createUsersTable)

  await pool.query(createSellersTable)

  await pool.query(createProductsTable)

  await pool.query(createProductImagesTable)

  await pool.query(createOrdersTable)
}

module.exports = { initDB, pool }