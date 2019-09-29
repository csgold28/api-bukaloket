"use strict";

class login {
  get rules() {
    return {
      // validation rules
      phone: "required",
      password: "required"
    };
  }
  get messages() {
    return {
      "phone.required": "No. Handphone harus diisi.",
      "password.required": "Password harus diisi"
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages);
  }
}

module.exports = login;
