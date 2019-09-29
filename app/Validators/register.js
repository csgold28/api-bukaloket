"use strict";

class register {
  get rules() {
    return {
      // validation rules
      name: "required",
      phone: "required|unique:users",
      password: "required"
    };
  }
  get messages() {
    return {
      "name.required": "Nama harus diisi.",
      "phone.required": "No. Handphone harus diisi.",
      "phone.unique": "No. Handphone sudah terdaftar.",
      "password.required": "Password harus diisi"
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages);
  }
}

module.exports = register;
