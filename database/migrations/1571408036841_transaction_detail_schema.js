'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionDetailSchema extends Schema {
  up() {
    this.create('transaction_details', (table) => {
      table.increments()
      table
        .integer("transaction_id")
        .unsigned()
        .references("id")
        .inTable("transactions");
      table
        .integer("product_id")
        .unsigned()
        .references("id")
        .inTable("products");
      table.integer('harga')
      table.integer('status')
      table.integer('aksi')
      table.timestamps()
    })
  }

  down() {
    this.drop('transaction_details')
  }
}

module.exports = TransactionDetailSchema
