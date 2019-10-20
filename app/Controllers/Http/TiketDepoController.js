"use strict";

const Moment = use("moment");

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
      tiketdeposit.nominal = nomunik;

      //buat expired
      // let exp = Moment()
      //   .add(2, "hour")
      //   .format("H:mm");
      var exp = new Date();
      tiketdeposit.expired = exp;
      await tiketdeposit.save();

      const depositdetail = await auth.user
        .depositdetail()
        .create(request.only(["invoice", "nominal", "status"]));
      depositdetail.invoice = invoice;
      depositdetail.nominal = nomunik;
      depositdetail.status = 2;
      await depositdetail.save();

      return response.json(depositdetail);
    } catch (e) {
      console.log(e);
      return response.json({
        message: "Gagal"
      });
    }
  }
}

module.exports = TiketDepoController;
