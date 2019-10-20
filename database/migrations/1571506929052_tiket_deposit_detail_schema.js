"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TiketDepositDetailSchema extends Schema {
  up() {
    this.create("tiket_deposit_details", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.string("invoice");
      table.integer("nominal");
      table.integer("status").comment("1=sukses, 2=pending, 3=gagal");
      table.integer("by").comment("1=sistem, 2=admin");
      table.integer("admin_id");
      table.timestamps();
    });
  }

  down() {
    this.drop("tiket_deposit_details");
  }
}

module.exports = TiketDepositDetailSchema;
