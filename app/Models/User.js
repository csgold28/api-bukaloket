"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");

class User extends Model {
  static boot() {
    super.boot();

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook("beforeSave", async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */

  static get hidden() {
    return ["password"];
  }

  // profile() {
  //   return this.hasOne("App/Models/Profile");
  // }

  tiketdeposit() {
    return this.hasMany("App/Models/TiketDeposit");
  }

  depositdetail() {
    return this.hasMany("App/Models/TiketDepositDetail");
  }

  deposit() {
    return this.hasOne("App/Models/Deposit");
  }

  komisi() {
    return this.hasOne("App/Models/Komisi");
  }

  point() {
    return this.hasOne("App/Models/Point");
  }

  profile() {
    return this.hasOne("App/Models/Profile");
  }

  transaction() {
    return this.hasMany("App/Models/Transaction");
  }
}

module.exports = User;
