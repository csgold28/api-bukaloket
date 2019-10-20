"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class TiketDepositDetail extends Model {
  static get hidden() {
    return ["admin_id"];
  }
  user() {
    return this.belongsTo("App/Models/User");
  }
}

module.exports = TiketDepositDetail;
