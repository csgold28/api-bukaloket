"use strict";

const Product = use("App/Models/Product");

class TransactionController {
  async createTransaction({ response, auth, request }) {
    const trx = await auth.user.deposit().fetch();
    const saldo = trx["saldo"];
    const req = request.input("product_id");
    const produk = await Product.find(req);
    const harga = produk["harga_jual"];
    if (saldo >= harga) {
      return response.json({ message: "Saldo cukup" });
    }
    return response.json({ message: "saldo tidak cukup" });
  }
}

module.exports = TransactionController;
