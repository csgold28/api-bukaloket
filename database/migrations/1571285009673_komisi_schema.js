"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class KomisiSchema extends Schema {
  up() {
    this.create("komisis", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.integer("komisi");
      table.timestamps();
    });
  }

  down() {
    this.drop("komisis");
  }
}

module.exports = KomisiSchema;
