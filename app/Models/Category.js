"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Category extends Model {
  operator() {
    return this.hasMany("App/Models/Operator");
  }
}

module.exports = Category;
