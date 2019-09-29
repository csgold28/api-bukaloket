"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", table => {
      table.increments();
      table.string("name", 254).notNullable();
      table
        .string("phone", 254)
        .notNullable()
        .unique();
      table
        .integer("deposit")
        .notNullable()
        .defaultTo(0);
      table
        .integer("poin")
        .notNullable()
        .defaultTo(0);
      table
        .integer("komisi")
        .notNullable()
        .defaultTo(0);
      table.string("password", 254).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
