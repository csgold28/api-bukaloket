"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Categorie extends Model {
  product() {
    return this.hasMany("App/Models/Product");
  }
}

module.exports = Categorie;
