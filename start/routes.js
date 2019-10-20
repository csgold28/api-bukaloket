"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

//auth
Route.post("/api/register", "AuthController.register").validator("register");
Route.post("/api/login", "AuthController.login").validator("login");
Route.post("/api/logout", "AuthController.logout").middleware("auth:jwt");

//profile
Route.post("/api/profile", "ProfileController.store")
  .middleware("auth")
  .validator("profile");
Route.put("/api/edit_profile/:id", "ProfileController.update").middleware(
  "auth"
);

//product
Route.get("/api/product", "ProductController.index").middleware("auth");

Route.post(
  "api/create_categorie",
  "ProductController.createCategori"
).middleware("auth");
Route.post("api/create_operator/:id", "ProductController.createOperator");
Route.post("api/create_product/:id", "ProductController.createProduct");

//creat tiket deposit
Route.post("api/tiket_depo", "TiketDepoController.creatTiketDepo").middleware(
  "auth"
);

//Update Deposit
Route.post("api/update_depo", "DepositController.updateTiketDeposit");

//Transaksi
Route.get("/api/trx", "TransactionController.createTransaction").middleware(
  "auth"
);

//Route Test
Route.get("/api/tes", "TeController.tes");
