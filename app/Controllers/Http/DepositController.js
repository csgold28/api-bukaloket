"use strict";

const TiketDeposit = use("App/Models/TiketDeposit");
const Deposit = use("App/Models/Deposit");
const DepositDetail = use("App/Models/TiketDepositDetail");
const Moment = use("moment");

class DepositController {
  async updateTiketDeposit({ response, auth, request }) {
    // //Cek Exp Tiket Deposit
    // const now = Moment().format("H:mm");
    // const trx = await auth.user.tiketdeposit().fetch();
    // const saldo = trx["created_at"];

    // const u = tiketDepo["user_id"];
    // const d = await DepositDetail.findBy("user_id", u);
    // if (tiketDepo <= now) {
    //   d.status = 3;
    //   await tiketDepo.delete();
    // }

    // return response.json(saldo);

    //==========================================================

    //Response dari cek Bank
    const balance = 101039;

    //Update Deposit
    const tiketdeposit = await TiketDeposit.findBy("nominal", balance);
    const nominal = tiketdeposit["nominal"];
    const userTiketDepo = tiketdeposit["user_id"];
    const userDepo = await Deposit.findBy("user_id", userTiketDepo);
    if (balance == nominal) {
      userDepo.saldo = userDepo.saldo + balance;
      await userDepo.save();

      //Update Status Deposit
      const depositdetail = await DepositDetail.findBy("nominal", balance);
      depositdetail.status = 1;
      depositdetail.by = 1;
      await depositdetail.save();
      await tiketdeposit.delete();
    }
  }
}

module.exports = DepositController;
