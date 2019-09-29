"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Product extends Model {
  categorie() {
    return this.belongsTo("App/Models/Categorie");
  }
  operator() {
    return this.belongsTo("App/Models/Operator");
  }
}

module.exports = Product;
