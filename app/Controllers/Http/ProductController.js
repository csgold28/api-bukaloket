"use strict";

const Categorie = use("App/Models/Categorie");
const Product = use("App/Models/Product");

class ProductController {
  async showProduct({ response }) {
    const product = await Product.query()
      .with("categorie")
      .with("operator")
      .fetch();
    return response.json(product);
  }
  async createCategori({ request, response }) {
    const categorie = await Categorie.create(request.all());

    return response.json(categorie);
  }

  async createProduct({ request, response, params }) {
    const categorie = await Categorie.find(params.id);
    const product = await categorie.product().create(request.all());

    await product.load("categorie");
    return response.json(product);
  }
}

module.exports = ProductController;
