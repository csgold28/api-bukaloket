"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductSchema extends Schema {
  up() {
    this.create("products", table => {
      table.increments();
      table
        .integer("categorie_id")
        .unsigned()
        .references("id")
        .inTable("categories");
      table
        .integer("operator_id")
        .unsigned()
        .references("id")
        .inTable("operators");
      table.string("name");
      table.string("kode_produk").nullable();
      table.string("descripsi").nullable();
      table.string("harga");
      table.string("harga_beli");
      table.integer("poin").defaultTo(0);
      table.integer("komisi").defaultTo(0);
      table
        .integer("is_active")
        .defaultTo(1)
        .comment("1=Aktif, 2=tidak aktif");
      table.timestamps();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductSchema;
