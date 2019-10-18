"use strict";

const Category = use("App/Models/Category");
const Operator = use("App/Models/Operator");
const Product = use("App/Models/Product");

class ProductController {
  async index({ response, request }) {
    try {
      var operator = request.input(["operator"]);
      const provider = await Operator.find(operator);
      await provider.load("product");
      return response.json(provider);
    } catch (e) {
      console.log(e);
      return response.json({ message: "Produk tidak ditemukan" });
    }
  }
  async createCategori({ request, response }) {
    const category = await Category.create(request.only(["name"]));
    category.name = request.input("name");
    return response.json(category);
  }

  async createOperator({ request, response, params }) {
    const category = await Category.find(params.id);
    const operator = await category.operator().create(request.all());

    return response.json(operator);
  }

  async createProduct({ request, response, params }) {
    const operator = await Operator.find(params.id);
    const product = await operator.product().create(request.all());

    return response.json(product);
  }
}

module.exports = ProductController;
