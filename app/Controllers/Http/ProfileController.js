"use strict";

const Profile = use("App/Models/Profile");

class ProfileController {
  async store({ request, auth, response }) {
    try {
      // if (await auth.check()) {
      const profile = await auth.user.profile().create(request.all());
      return response.json(profile);
      // }
    } catch (e) {
      console.log(e);
      return response.status(401).json({
        message: "Tidak dapat melakukan Akses!"
      });
    }
  }

  async update({ request, params, response }) {
    const profile = await Profile.find(params.id);
    profile.email = request.input("email");
    profile.foto = request.input("foto");
    profile.nik = request.input("nik");
    profile.alamat = request.input("alamat");
    profile.provinsi = request.input("provinsi");
    profile.kota = request.input("kota");
    profile.kecamatan = request.input("kecamatan");
    profile.desa = request.input("desa");

    await profile.save();

    return response.json(profile);
  }
}

module.exports = ProfileController;
