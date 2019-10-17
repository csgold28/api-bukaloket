"use strict";

const User = use("App/Models/User");

class AuthController {
  async register({ request, auth, response }) {
    const user = await User.create(request.all());

    //generate token for user;
    const token = await auth.generate(user);

    Object.assign(user, token);

    return response.json(user);
  }

  async login({ request, auth, response }) {
    const { phone, password } = request.all();

    try {
      if (await auth.attempt(phone, password)) {
        const user = await User.findBy("phone", phone);
        const token = await auth.generate(user);

        Object.assign(user, token);
        await user.load("deposit");
        await user.load("komisi");
        await user.load("point");
        await user.load("tiketdeposit");
        await user.load("profile");
        return response.json(user);
      }
    } catch (e) {
      console.log(e);
      return response.json({ message: "No. Handphone atau Password salah!" });
    }
  }
}

module.exports = AuthController;
