"use strict";

class profile {
  get rules() {
    return {
      // validation rules
      gender: "required",
      nik: "required|unique:profiles",
      email: "required|email|unique:profiles",
      alamat: "required",
      provinsi: "required",
      kota: "required",
      kecamatan: "required",
      desa: "required"
    };
  }
  get messages() {
    return {
      "gender.required": "Jenis kelamin harus diisi.",
      "nik.required": "Nomor KTP harus diisi.",
      "nik.unique": "Nomor KTP sudah terdaftar.",
      "email.required": "E-Mail harus diisi.",
      "email.unique": "E-Mail sudah terdaftar.",
      "email.email": "Penulisan E-Mail tidak valid.",
      "alamat.required": "Alamat harus diisi",
      "provinsi.required": "Provinsi harus diisi.",
      "kota.required": "Kota harus diisi",
      "kecamatan.required": "Kecamatan harus diisi.",
      "desa.required": "Desa/Kelurahan harus diisi."
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages);
  }
}

module.exports = profile;
