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
      table.integer("nominal");
      table.timestamp("expired");
      table.timestamps();
    });
  }

  down() {
    this.drop("tiket_deposits");
  }
}

module.exports = TiketDepositSchema;
