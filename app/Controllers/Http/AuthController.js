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
        await user.load("profile");
        await user.load("deposit");
        await user.load("komisi");
        await user.load("point");
        await user.load("depositdetail");
        return response.json(user);
      }
    } catch (e) {
      console.log(e);
      return response.json({ message: "No. Handphone atau Password salah!" });
    }
  }

  async logout({ auth, response }) {
    const apiToken = auth.getAuthHeader();
    await auth.authenticator("jwt").revokeTokens([apiToken]);
    return response.send({ message: "Logout successfully!" });
  }
}

module.exports = AuthController;
