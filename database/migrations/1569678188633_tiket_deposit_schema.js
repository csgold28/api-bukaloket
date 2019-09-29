"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TiketDepositSchema extends Schema {
  up() {
    this.create("tiket_deposits", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.string("invoice");
      table.integer("nominal");
      table
        .integer("status")
        .defaultTo(2)
        .comment("1=sukses, 2=pending, 3=gagal, 4=refund");
      table.timestamps();
    });
  }

  down() {
    this.drop("tiket_deposits");
  }
}

module.exports = TiketDepositSchema;
