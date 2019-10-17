"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProfileSchema extends Schema {
  up() {
    this.create("profiles", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users");
      table.string("email").unique();
      table.string("foto");
      table.integer("gender").comment("1=laki-laki, 2=perempuan");
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
    this.drop("profiles");
  }
}

module.exports = ProfileSchema;
