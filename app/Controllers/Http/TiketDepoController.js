"use strict";

class TiketDepoController {
  async creatTiketDepo({ request, response, auth }) {
    const rand = Math.floor(Math.random() * 999) + 1000;
    const nominal = request.input("nominal");
    const subnominal = nominal.slice(0, -4);
    const nomunik = subnominal + rand;

    this.length = 13;
    this.timestamp = +new Date();

    let _getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let ts = this.timestamp.toString();
    let parts = ts.split("").reverse();
    let invoice = "TOPUP/";

    for (let i = 0; i < this.length; ++i) {
      let index = _getRandomInt(0, parts.length - 1);
      invoice += parts[index];
    }

    try {
      const tiketdeposit = await auth.user
        .tiketdeposit()
        .create(request.only(["invoice", "nominal"]));
      tiketdeposit.invoice = invoice;
      tiketdeposit.nominal = nomunik;

      await tiketdeposit.save();

      return response.json(tiketdeposit);
    } catch (e) {
      console.log(e);
      return response.json({
        message: "Gagal"
      });
    }
  }

  async test() {}
}

module.exports = TiketDepoController;
