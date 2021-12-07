const { request, response } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuarios");
const generarJWT = require("../helpers/generar-jwt");

const login = async (req = request, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ email });
    const validPassword = bcryptjs.compareSync(password, usuario.password);

    if (!validPassword) {
      return res
        .status(404)
        .json({ msg: "Usuario / Password no son correctos --password" });
    }
    const token = await generarJWT(usuario.id);
    res.json({ usuario, token });
  } catch (error) {
    res.json({ msg: "Hay un error", error });
  }
};

module.exports = login;
