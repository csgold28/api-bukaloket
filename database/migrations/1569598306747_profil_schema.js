"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProfilSchema extends Schema {
  up() {
    this.create("profils", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.string("gender");
      table.string("nik").unique();
      table.text("alamat");
      table.string("provinsi");
      table.string("kota");
      table.string("kecamatan");
      table.string("desa");
      table.timestamps();
    });
  }

  down() {
    this.drop("profils");
  }
}

module.exports = ProfilSchema;
