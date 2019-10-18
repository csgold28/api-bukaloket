"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Operator extends Model {
  category() {
    return this.belongsTo("App/Models/Category");
  }

  product() {
    return this.hasMany("App/Models/Product");
  }
}

module.exports = Operator;
