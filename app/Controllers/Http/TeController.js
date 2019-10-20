"use strict";

const Moment = use("moment");

class TeController {
  async tes({ response }) {
    let exp = Moment()
      .add(1, "hour")
      .format("H:mm");
    let now = Moment().format("H:mm");

    // return response.json(exp);

    if (exp == now) {
      return response.json({ message: "EXPIRED" });
    }
    return response.json({ message: "AKTIF" });
  }
}

module.exports = TeController;
