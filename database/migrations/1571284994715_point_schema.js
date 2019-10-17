"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PointSchema extends Schema {
  up() {
    this.create("points", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.integer("point");
      table.timestamps();
    });
  }

  down() {
    this.drop("points");
  }
}

module.exports = PointSchema;
