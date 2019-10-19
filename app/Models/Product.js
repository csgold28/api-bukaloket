"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Product extends Model {
  static get hidden() {
    return ["harga_modal", "is_aktif"];
  }

  operator() {
    return this.belongsTo("App/Models/Operator");
  }
}

module.exports = Product;
