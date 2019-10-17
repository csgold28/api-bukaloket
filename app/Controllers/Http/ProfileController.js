"use strict";

const Profile = use("App/Models/Profile");
const Helpers = use("Helpers");
const CloudinaryService = use("App/Services/CloudinaryService");

class ProfileController {
  async store({ request, auth, response }) {
    const profile = await auth.user
      .profile()
      .create(
        request.only([
          "email",
          "foto",
          "nik",
          "alamat",
          "provinsi",
          "kota",
          "kecamatan",
          "desa"
        ])
      );
    profile.email = request.input("email");

    const myFoto = request.file("foto");
    profile.foto = new Date().getTime() + "." + myFoto.subtype;
    await myFoto.move(Helpers.publicPath("upload/profile/foto"), {
      name: profile.foto
    });

    profile.nik = request.input("nik");
    profile.alamat = request.input("alamat");
    profile.provinsi = request.input("provinsi");
    profile.kota = request.input("kota");
    profile.kecamatan = request.input("kecamatan");
    profile.desa = request.input("desa");

    await profile.save();

    return response.json(profile);
  }

  async update({ request, params, response }) {
    const profile = await Profile.find(params.id);
    profile.email = request.input("email");

    const myFoto = request.file("foto");
    const cloudinaryResponse = await CloudinaryService.v2.uploader.upload(
      myFoto.tmpPath,
      { folder: "bukaloket" }
    );
    profile.foto = cloudinaryResponse.secure_url;

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
