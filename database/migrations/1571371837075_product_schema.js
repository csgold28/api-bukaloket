"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductSchema extends Schema {
  up() {
    this.create("products", table => {
      table.increments();
      table
        .integer("operator_id")
        .unsigned()
        .references("id")
        .inTable("operators");
      table.string("code_product").unique();
      table.string("name");
      table.string("foto");
      table.string("harga_jual");
      table.string("harga_modal");
      table.integer("point");
      table.integer("komisi");
      table.integer("berat").comment("per kg");
      table.integer("is_aktif").comment("1=aktif 2=tdk_aktif");
      table.timestamps();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductSchema;
