"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OperatorSchema extends Schema {
  up() {
    this.create("operators", table => {
      table.increments();
      table.string("name");
      table.timestamps();
    });
  }

  down() {
    this.drop("operators");
  }
}

module.exports = OperatorSchema;
